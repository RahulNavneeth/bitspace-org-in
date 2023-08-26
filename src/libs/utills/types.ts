export type Role = {
    role: string,
    username: string
}

export type User = {
    init: string,
    id: string,
    username: string,
    rank: number,
    is_ban: boolean,
    title: string,
    strike: number,
    points: number,
    is_joined_discord: boolean,
    created_at: Date,
    discord_id: string,
    github_id: string,
    Role: Array<Role>
}
