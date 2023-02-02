const net = require('net')

const HOSTNAME = "localhost"
const PORT = 5000

const socket = net.connect(HOSTNAME, PORT)
socket.write('Elisabetta')

socket.on('data', (data) => {
    console.log(data.toString())
})