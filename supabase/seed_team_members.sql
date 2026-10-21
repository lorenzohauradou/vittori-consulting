-- Membri del team (dalla sezione "Chi siamo" della home).
-- Prima di eseguirlo sostituisci ogni DA_COMPILARE con l'email con cui la
-- persona accederà all'area riservata: finché resta un segnaposto l'insert
-- fallisce per il vincolo sul formato email, così non si crea nulla a metà.
--
-- Come vengono assegnate le action item di Fathom:
--   1. se Fathom indica un'email, conta solo quella: deve essere `email` oppure
--      stare in `fathom_aliases` (es. l'email aziendale usata negli inviti del
--      calendario, se diversa da quella di accesso). Un'email sconosciuta viene
--      trattata come esterna e la task va in "Da assegnare";
--   2. senza email, si confronta il nome con `full_name` / `fathom_aliases`.
-- Le due Camilla vanno distinte col cognome, altrimenti le loro task senza
-- email finiscono in "Da assegnare".
--
-- Per aggiungere qualcuno in futuro basta un'altra insert: al primo accesso
-- l'account viene creato e collegato in automatico.

insert into public.team_members (email, full_name, role, fathom_aliases) values
  (lower('valerio.vittorii@gmail.com'), 'Valerio Vittori', 'admin',  '{}'),
  (lower('lorenzooradu@gmail.com'), 'Lorenzo',         'admin',  '{}'),
  (lower('francescovc26@gmail.com'), 'Francesco', 'admin',  '{}');

  -- (lower('camilla.zamagni@gmail.com'), 'Camilla',         'member', '{}'),
  -- (lower('camilla.zamagni@gmail.com'), 'Camilla',         'member', '{}'),
  -- (lower('nicole.oradu@gmail.com'), 'Nicole',          'member', '{}'),
  -- (lower('gioele.oradu@gmail.com'), 'Gioele',          'member', '{}'),
  -- (lower('tommaso.oradu@gmail.com'), 'Tommaso',         'member', '{}'),
  -- (lower('edoardo.oradu@gmail.com'), 'Edoardo',         'member', '{}'),
  -- (lower('veronica.oradu@gmail.com'), 'Veronica',        'member', '{}'),
  -- (lower('patrizia.oradu@gmail.com'), 'Patrizia',        'member', '{}'),
  -- (lower('sonia.oradu@gmail.com'), 'Sonia',           'member', '{}'),
  -- (lower('francesco.oradu@gmail.com'), 'Francesco',       'member', '{}'),
  -- (lower('cristina.oradu@gmail.com'), 'Cristina',        'member', '{}');
