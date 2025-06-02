export class NotFoundError extends Error {
    constructor(resource: string) {
        super(`${resource} not found`)
        this.name = 'NotFoundError'
    }
}

export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'ValidationError'
    }
}

export class DuplicateError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'DuplicateError'
    }
} 
