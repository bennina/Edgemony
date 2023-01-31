//metodo require() => richiamo il modulo built-in

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    /*res.write(
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '<title>Document</title>' +
        '</head>' +
        '<body>' +
        'HOME PAGE' +
        '</body>' +
        '</html>'
    );
    res.end();*/
});

//80 / 8000 /8080 /3000 / 3001 / 5000 / 5001 / 5010 / 3010
server.listen(5000);