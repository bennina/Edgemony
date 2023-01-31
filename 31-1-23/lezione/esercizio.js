const http = require('http');
const os = require('os');

let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();

let message = ` <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>
l'utente: <b>${utente.username}</b> <br>
ha avviato l'app <b>${data.getDate()}/${data.getMonth()}/${data.getFullYear()}</b> <br> Usando la piattaforma: <b>${piattaforma}</b>
</body></html> `;

const server = http.createServer((req, res) => {
    if (req.url === '/')
        req.end(message);
})

server.listen(3001);
console.log(message);