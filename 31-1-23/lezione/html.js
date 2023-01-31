const http = require('http')
const fs = require('fs')

const homepage = fs.readFileSync('index.html');

let server = http.createServer((req, res) => {
    if (req.url === '/chi-siamo')
        res.end('pagina chi siamo')
    else if (req.url === '/contatti')
        res.end('pagina contatti')
    else if (req.url === '/')
        res.end(homepage)
    else {
        res.writeHead(404)
        res.end('sorri! Not found')
    }
})

server.listen(8000);