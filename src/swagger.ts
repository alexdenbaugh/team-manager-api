import swaggerJsdoc from 'swagger-jsdoc'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Team Manager API',
            version: '1.0.0',
            description: 'A RESTful API for managing teams and users',
            contact: {
                name: 'Alex Denbaugh',
                url: 'https://github.com/alexdenbaugh/team-manager-api'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            }
        ],
        components: {
            schemas: {
                Team: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer'
                        },
                        name: {
                            type: 'string'
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.ts']
}

export const specs = swaggerJsdoc(options) 
