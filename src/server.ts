import app from './app'
const port = process.env.PORT

// ANSI color codes
const colors = {
    green: '\x1b[32m',
    blue: '\x1b[34m',
    reset: '\x1b[0m',
    bright: '\x1b[1m'
}

app.listen(port, () => {
    console.log(`${colors.green}${colors.bright}Server listening at${colors.reset} http://localhost:${port}`)
    console.log(`${colors.blue}${colors.bright}API Documentation available at${colors.reset} http://localhost:${port}/api-docs`)
})
