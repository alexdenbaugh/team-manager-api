import userRoutes from './routes/userRoutes'
import teamRoutes from './routes/teamRoutes'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { specs } from './swagger'
import helmet from 'helmet'

const app = express()

app.use(helmet())

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.get('/', (req, res) => {
    res.redirect('/api-docs')
})

app.use('/users', userRoutes)
app.use('/teams', teamRoutes)

app.use('*', (req, res) => {
    console.log(`404: ${req.method} ${req.originalUrl}`)
    res.status(404).json({ error: 'Route not found' })
})

export default app
