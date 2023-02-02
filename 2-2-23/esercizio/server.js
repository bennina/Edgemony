const net = require('net')

const HOSTNAME = "localhost"
const PORT = 5000

net.createServer((socket) => {
    console.log(` Server connesso alla porta ${PORT}`)
    socket.on('data', (name) => {
        socket.write(` Ciao ${name}`)
    })
}).listen(PORT, HOSTNAME)
