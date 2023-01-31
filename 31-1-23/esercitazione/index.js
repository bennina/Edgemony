const http = require('http')
const os = require('os')
const fs = require('fs')
const user = fs.readFileSync('user.html');
const shop = fs.readFileSync('shop.html');

let home = fs.readFileSync('home.html');

const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end(home)
    else if(req.url === '/user')
        res.end(user)
    else if(req.url === '/shop')
        res.end(shop)
    else {
        res.writeHead(404)
        res.end('sorry! Not found')
    }
})

server.listen(3001)


