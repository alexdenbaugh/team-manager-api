import { Router } from 'express'
import { addUserToTeam, createTeam, getAllTeams, getAllUsersInTeam } from '../controllers/TeamController'
const router = Router()

/**
 * @swagger
 * /teams:
 *   get:
 *     summary: Get all teams
 *     tags: [Teams]
 *     responses:
 *       200:
 *         description: List of all teams
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *       500:
 *         description: Server error
 */
router.get('/', getAllTeams)  // Get /teams

/**
 * @swagger
 * /teams:
 *   post:
 *     summary: Create a new team
 *     tags: [Teams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Team created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/', createTeam)  // Post /teams

/**
 * @swagger
 * /teams/{id}/users:
 *   get:
 *     summary: Get all users in a team
 *     tags: [Teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team ID
 *     responses:
 *       200:
 *         description: List of users in the team
 *       404:
 *         description: Team not found
 *       500:
 *         description: Server error
 */
router.get('/:id/users', getAllUsersInTeam)  // Get /teams/:id/users

/**
 * @swagger
 * /teams/{id}/users/{userId}:
 *   post:
 *     summary: Add a user to a team
 *     tags: [Teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team ID
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       201:
 *         description: User added to team successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Team or user not found
 *       409:
 *         description: User already in team
 *       500:
 *         description: Server error
 */
router.post('/:id/users/:userId', addUserToTeam) // Post /teams/:id/users/:userId
export default router
