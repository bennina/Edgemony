const express = require('express')
const { libri, favoriti } = require('./data')
const logger = require('./logger')
const authorize = require('./auth')
const path = require('path')
const app = express()

const PORT = 8000
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./public/home.html'))
})
app.get('/book', (req, res) => {
    res.end(JSON.stringify(libri))
})
app.get('/api', [authorize,logger], (req, res) => {  
    res.end(JSON.stringify(favoriti))
    console.log(req.user)
})
app.get('*', (req, res) => {
    res.send('404! Not found')
})

app.listen(PORT, () => {
    console.log('start app')
})