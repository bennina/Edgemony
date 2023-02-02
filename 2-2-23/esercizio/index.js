const http = require('http');
const libri = require('./libri')
const fs = require('fs')
const about = fs.readFileSync('about.html');
const home = fs.readFileSync('home.html');

const server = http.createServer((req, res) => {
    
    
    if (req.url === '/')
        res.end(home)
    else if(req.url === '/chi-siamo')
        res.end(about)
    else if (req.url === '/api')
        res.writeHead(200, { 'Content-Type': 'application/json' }),
        res.end(JSON.stringify(libri))
    else {
        res.writeHead(404)
        res.end('sorry! Not found')
    }
});


const callback = () => {
    const address = server.address().address;
    const port = server.address().port;
    console.log('server in uso')
}

server.listen(8000, 'localhost', callback)
console.log(libri)