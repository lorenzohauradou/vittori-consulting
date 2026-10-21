// Sottoinsieme dello schema Meeting di Fathom che usiamo
// (https://developers.fathom.ai/api-reference/webhook-payloads/new-meeting-content-ready)

export interface FathomAssignee {
    name: string | null
    email: string | null
    team: string | null
}

export interface FathomActionItem {
    description: string
    user_generated: boolean
    completed: boolean
    recording_timestamp: string
    recording_playback_url: string
    assignee: FathomAssignee | null
}

export interface FathomMeeting {
    title: string
    meeting_title: string | null
    recording_id?: number
    url: string
    share_url: string
    created_at: string
    scheduled_start_time: string | null
    recording_start_time: string | null
    action_items?: FathomActionItem[] | null
    default_summary?: { template_name: string | null; markdown_formatted: string | null } | null
}

export interface FathomMeetingListResponse {
    items: FathomMeeting[]
    next_cursor: string | null
}
