import type { Request, Response } from 'express'
import { UserService } from "../services/UserService"

const userService = new UserService()

export async function getAllUsers(req: Request, res: Response): Promise<void> {
    try {
        const users = await userService.getAllUsers()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ error: 'Failed to get users' })
    }
}

export async function createUser(req: Request, res: Response): Promise<void>  {
    try {
        const { name, email } = req.body
        if (!name || !email) {
            res.status(400).json({ error: 'Name and email are required' })
            return
        }
        const newUser = await userService.createUser({name, email})
        res.status(201).json(newUser)
    } catch (err: any) {
        if (err.code === 'P2002') {
            res.status(409).json({ error: 'Email already exists' })
        } else {
            res.status(500).json({ error: 'Failed to create user' })
        }
    }
}