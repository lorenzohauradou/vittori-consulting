-- Area riservata del team: membri, task e import delle action item di Fathom.
-- Da eseguire una sola volta nel SQL Editor di Supabase (o con `supabase db push`).
--
-- Modello di sicurezza:
--   * l'accesso è consentito solo a chi è in public.team_members (allowlist),
--     non basta avere un account Supabase Auth (Auth è condiviso col sito pubblico);
--   * anon non ha alcun privilegio su queste tabelle;
--   * i membri vedono/modificano solo le proprie task, gli admin vedono tutto;
--   * le colonne di sistema (source, fathom_*, created_by, timestamp) non sono
--     scrivibili dal client: le scrive solo il backend con la service role.

-- ─── Membri del team ────────────────────────────────────────────────────────

create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users (id) on delete set null,
  email text not null unique,
  full_name text not null check (char_length(btrim(full_name)) > 0),
  role text not null default 'member' check (role in ('admin', 'member')),
  -- Nomi o email alternativi con cui la persona compare nelle call di Fathom
  fathom_aliases text[] not null default '{}',
  active boolean not null default true,
  created_at timestamptz not null default now(),
  constraint team_members_email_format check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  constraint team_members_email_lowercase check (email = lower(email))
);

create function public.current_member_id()
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
  select id
  from public.team_members
  where user_id = auth.uid() and active
$$;

create function public.is_team_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.team_members
    where user_id = auth.uid() and active and role = 'admin'
  )
$$;

revoke execute on function public.current_member_id() from public, anon;
revoke execute on function public.is_team_admin() from public, anon;
grant execute on function public.current_member_id() to authenticated, service_role;
grant execute on function public.is_team_admin() to authenticated, service_role;

-- Collega l'account Auth al membro con la stessa email, solo a email confermata.
create function public.link_auth_user_to_team_member()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.email_confirmed_at is not null then
    update public.team_members
       set user_id = new.id
     where email = lower(new.email)
       and user_id is null;
  end if;
  return new;
end
$$;

revoke execute on function public.link_auth_user_to_team_member() from public, anon, authenticated;

create trigger link_team_member_after_auth_user_write
  after insert or update of email_confirmed_at on auth.users
  for each row execute function public.link_auth_user_to_team_member();

-- Quando si aggiunge (o cambia email a) un membro, lo collega a un account già esistente.
create function public.team_members_link_existing_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if tg_op = 'INSERT' or new.email is distinct from old.email then
    new.user_id := (
      select u.id
      from auth.users u
      where lower(u.email) = new.email
        and u.email_confirmed_at is not null
      limit 1
    );
  end if;
  return new;
end
$$;

revoke execute on function public.team_members_link_existing_user() from public, anon, authenticated;

create trigger team_members_before_write
  before insert or update of email on public.team_members
  for each row execute function public.team_members_link_existing_user();

-- ─── Task ───────────────────────────────────────────────────────────────────

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(btrim(title)) between 1 and 500),
  description text check (char_length(description) <= 5000),
  status text not null default 'todo' check (status in ('todo', 'in_progress', 'done')),
  priority text not null default 'medium' check (priority in ('low', 'medium', 'high')),
  due_date date,
  -- null = "da assegnare" (es. action item di Fathom senza un membro riconosciuto)
  assignee_id uuid references public.team_members (id) on delete set null,
  created_by uuid default public.current_member_id() references public.team_members (id) on delete set null,
  source text not null default 'manual' check (source in ('manual', 'fathom')),
  fathom_recording_id bigint,
  fathom_meeting_title text,
  fathom_meeting_at timestamptz,
  fathom_playback_url text,
  -- Assegnatario così come indicato da Fathom ("Nome <email>"), utile per gli admin
  fathom_assignee text,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index tasks_assignee_status_idx on public.tasks (assignee_id, status);
create index tasks_created_by_idx on public.tasks (created_by);
create index tasks_fathom_recording_idx on public.tasks (fathom_recording_id)
  where fathom_recording_id is not null;

create function public.tasks_before_write()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  if new.status = 'done' then
    if tg_op = 'INSERT' or old.status is distinct from 'done' then
      new.completed_at := now();
    end if;
  else
    new.completed_at := null;
  end if;
  return new;
end
$$;

create trigger tasks_before_write
  before insert or update on public.tasks
  for each row execute function public.tasks_before_write();

-- ─── Import Fathom (idempotente) ────────────────────────────────────────────

-- Una riga per ogni action item già importata: evita duplicati se Fathom
-- rimanda lo stesso webhook o se si rilancia la sincronizzazione, anche quando
-- la task nel frattempo è stata cancellata.
create table public.fathom_imports (
  item_key text primary key,
  recording_id bigint,
  task_id uuid references public.tasks (id) on delete set null,
  imported_at timestamptz not null default now()
);

-- Importa in un'unica transazione; restituisce quante task sono state create.
create function public.import_fathom_tasks(items jsonb)
returns integer
language plpgsql
set search_path = ''
as $$
declare
  item jsonb;
  new_task_id uuid;
  created_count integer := 0;
begin
  for item in select value from jsonb_array_elements(items)
  loop
    insert into public.fathom_imports (item_key, recording_id)
    values (item ->> 'item_key', (item ->> 'recording_id')::bigint)
    on conflict (item_key) do nothing;

    if found then
      insert into public.tasks (
        title, status, assignee_id, source,
        fathom_recording_id, fathom_meeting_title, fathom_meeting_at,
        fathom_playback_url, fathom_assignee
      )
      values (
        item ->> 'title',
        coalesce(item ->> 'status', 'todo'),
        (item ->> 'assignee_id')::uuid,
        'fathom',
        (item ->> 'recording_id')::bigint,
        item ->> 'meeting_title',
        (item ->> 'meeting_at')::timestamptz,
        item ->> 'playback_url',
        item ->> 'fathom_assignee'
      )
      returning id into new_task_id;

      update public.fathom_imports
         set task_id = new_task_id
       where item_key = item ->> 'item_key';

      created_count := created_count + 1;
    end if;
  end loop;

  return created_count;
end
$$;

revoke execute on function public.import_fathom_tasks(jsonb) from public, anon, authenticated;
grant execute on function public.import_fathom_tasks(jsonb) to service_role;

-- ─── Privilegi e Row Level Security ─────────────────────────────────────────

alter table public.team_members enable row level security;
alter table public.tasks enable row level security;
alter table public.fathom_imports enable row level security;

revoke all on public.team_members, public.tasks, public.fathom_imports from anon, authenticated;

-- team_members: i membri vedono il team (serve per nomi e assegnazioni).
-- Nessuna scrittura dal client: i membri si gestiscono da SQL/dashboard.
grant select on public.team_members to authenticated;

create policy "team_members_select_for_members"
  on public.team_members for select to authenticated
  using ((select public.current_member_id()) is not null);

-- tasks: il client può scrivere solo i campi "di contenuto".
grant select, delete on public.tasks to authenticated;
grant insert (title, description, status, priority, due_date, assignee_id) on public.tasks to authenticated;
grant update (title, description, status, priority, due_date, assignee_id) on public.tasks to authenticated;

create policy "tasks_select_own_or_admin"
  on public.tasks for select to authenticated
  using (
    (select public.is_team_admin())
    or assignee_id = (select public.current_member_id())
  );

create policy "tasks_insert_own_or_admin"
  on public.tasks for insert to authenticated
  with check (
    (select public.current_member_id()) is not null
    and created_by = (select public.current_member_id())
    and source = 'manual'
    and (
      (select public.is_team_admin())
      or assignee_id = (select public.current_member_id())
    )
  );

-- Un membro non può riassegnare le proprie task ad altri: solo gli admin.
create policy "tasks_update_own_or_admin"
  on public.tasks for update to authenticated
  using (
    (select public.is_team_admin())
    or assignee_id = (select public.current_member_id())
  )
  with check (
    (select public.is_team_admin())
    or assignee_id = (select public.current_member_id())
  );

-- Un membro può cancellare solo le task che si è creato da solo; quelle da
-- Fathom o assegnate da un admin restano (si possono solo completare).
create policy "tasks_delete_own_manual_or_admin"
  on public.tasks for delete to authenticated
  using (
    (select public.is_team_admin())
    or (
      source = 'manual'
      and created_by = (select public.current_member_id())
      and assignee_id = (select public.current_member_id())
    )
  );
