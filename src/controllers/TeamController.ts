import type { Request, Response } from 'express'
import { TeamService } from "../services/TeamService"
import { NotFoundError, ValidationError } from '../types/errors'

const teamService = new TeamService()

export async function getAllTeams(req: Request, res: Response): Promise<void> {
    try {
        const teams = await teamService.getAllTeams()
        res.status(200).json(teams)
    } catch (err) {
        res.status(500).json({ error: 'Failed to get teams' })
    }
}

export async function createTeam(req: Request, res: Response): Promise<void> {
    try {
        const { name } = req.body
        if (!name) {
            res.status(400).json({ error: 'Name is required' })
            return
        }
        const newTeam = await teamService.createTeam({name})
        res.status(201).json(newTeam)
    } catch (err) {
        res.status(500).json({ error: 'Failed to create team' })
    }
}

export async function getAllUsersInTeam(req: Request, res: Response): Promise<void> {
    try {
        const teamId = parseInt(req.params.id)
        if (isNaN(teamId)) {
            res.status(400).json({ error: 'Team Id must be a valid number'})
            return
        }
        const users = await teamService.getAllUsersInTeam({teamId})

        if (users === null) {
            res.status(404).json({ error: 'Team not found' })
            return
        }

        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ error: 'Failed to get all users in team' })
    }
}

export async function addUserToTeam(req: Request, res: Response): Promise<void> {
    try {
        const teamId = parseInt(req.params.id)
        const userId = parseInt(req.params.userId)
        if (isNaN(teamId)) {
            res.status(400).json({ error: 'Team Id must be a valid number' })
            return
        }
        if (isNaN(userId)) {
            res.status(400).json({ error: 'User Id must be a valid number' })
            return
        }

        const userTeam = await teamService.addUserToTeam({ teamId, userId })
        res.status(201).json(userTeam)
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({ error: err.message })
        } else if (err instanceof ValidationError) {
            res.status(400).json({ error: err.message })
        } else if (err instanceof Error && 'code' in err && err.code === 'P2002') {
            res.status(409).json({ error: 'User already exists in team' })
        } else {
            console.error('Unexpected error:', err)
            res.status(500).json({ error: 'Failed to add user to team' })
        }
    }
}