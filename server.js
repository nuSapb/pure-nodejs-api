const host = '127.0.0.1'
const port = '3000'

const server = require('./controller')

server.listen(port, hostname, () => {
    console.log(`Server running on http://${host}:${port}/`)
})