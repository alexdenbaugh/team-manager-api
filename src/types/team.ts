import { User } from "./user"

export interface Team {
    id: number
    name: string
    users?: UserTeam[]
}

export interface UserTeam {
    userId: number
    teamId: number
    user?: User
    team?: Team
}

export interface CreateTeamRequest {
    name: string
}

export interface GetAllUsersInTeamRequest {
    teamId: number
}

export interface AddUserToTeamRequest {
    teamId: number
    userId: number
}