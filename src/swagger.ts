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
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'The unique identifier for the user'
                        },
                        name: {
                            type: 'string',
                            description: 'The name of the user'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'The email address of the user'
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'The timestamp when the user was created'
                        },
                        teams: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/UserTeam'
                            },
                            description: 'The teams this user belongs to'
                        }
                    }
                },
                Team: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'The unique identifier for the team'
                        },
                        name: {
                            type: 'string',
                            description: 'The name of the team'
                        },
                        users: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/UserTeam'
                            },
                            description: 'The users in this team'
                        }
                    }
                },
                UserTeam: {
                    type: 'object',
                    properties: {
                        userId: {
                            type: 'integer',
                            description: 'The ID of the user'
                        },
                        teamId: {
                            type: 'integer',
                            description: 'The ID of the team'
                        },
                        user: {
                            $ref: '#/components/schemas/User',
                            description: 'The associated user details'
                        },
                        team: {
                            $ref: '#/components/schemas/Team',
                            description: 'The associated team details'
                        }
                    }
                },
                CreateUserRequest: {
                    type: 'object',
                    required: ['name', 'email'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'The name of the user'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'The email address of the user'
                        }
                    }
                },
                CreateTeamRequest: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'The name of the team'
                        }
                    }
                },
                AddUserToTeamRequest: {
                    type: 'object',
                    required: ['userId', 'teamId'],
                    properties: {
                        userId: {
                            type: 'integer',
                            description: 'The ID of the user to add'
                        },
                        teamId: {
                            type: 'integer',
                            description: 'The ID of the team to add the user to'
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.ts']
}

export const specs = swaggerJsdoc(options) 
 