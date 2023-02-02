const http = require('http');
const libri = require('./libri')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(libri))
});


const callback = () => {
    const address = server.address().address;
    const port = server.address().port;
    console.log('server in uso')
}

server.listen(8000, 'localhost', callback)
console.log(libri)