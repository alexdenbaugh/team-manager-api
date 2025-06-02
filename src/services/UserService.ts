import { PrismaClient } from "@prisma/client"
import { CreateUserRequest } from "../types/user"

const prisma = new PrismaClient()

export class UserService {
    async getAllUsers() {
        return await prisma.user.findMany()
    }

    async createUser({name, email}: CreateUserRequest) {
        return await prisma.user.create({data: {name, email}})
    }
}   