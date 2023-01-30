//metodo require() => richiamo il modulo built-in

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Home');
    }
    if (req.url === '/studenti'){
        res.end('Pagina studenti');
    }
    if (req.url === '/corsi'){
        res.end('Pagina corsi');
    }

});

//80 / 8000 /8080 /3000 / 3001 / 5000 / 5001 / 5010 / 3010
server.listen(3000);