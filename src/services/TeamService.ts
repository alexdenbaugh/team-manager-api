import { PrismaClient } from "@prisma/client"
import type { AddUserToTeamRequest, CreateTeamRequest, GetAllUsersInTeamRequest } from "../types/team"
import { NotFoundError, ValidationError } from "../types/errors"

const prisma = new PrismaClient()

export class TeamService {
    async getAllTeams() {
        return await prisma.team.findMany()
    }

    async createTeam({ name }: CreateTeamRequest) {
        return await prisma.team.create({data: {name}})
    }

    async getAllUsersInTeam({ teamId }: GetAllUsersInTeamRequest) {
        const team = await prisma.team.findUnique({ 
            where: { id: teamId },
            include: {
                users: {
                    include: {
                        user: true
                    }
                }
            }
        })
        if (!team) return null
        return team.users.map(userTeam => userTeam.user)
    }

    async addUserToTeam({ teamId, userId }: AddUserToTeamRequest) {
        if (!teamId || !userId) {
            throw new ValidationError('Team Id and User Id are required')
        }
        return await prisma.$transaction(async (tx) => {
            const [team, user] = await Promise.all([
                tx.team.findUnique({ where: { id: teamId } }),
                tx.user.findUnique({ where: { id: userId } })
            ])
            if (!team) throw new NotFoundError('Team')
            if (!user) throw new NotFoundError('User')
            const existingUserTeam = await tx.userTeam.findUnique({
                where: {
                    userId_teamId: {
                        userId,
                        teamId
                    }
                }
            })
            if (existingUserTeam) {
                throw new ValidationError('User is already a member of this team')
            }
            return tx.userTeam.create({
                data: {
                    teamId,
                    userId
                },
                include: {
                    user: true,
                    team: true
                }
            })
        })
    }
}
