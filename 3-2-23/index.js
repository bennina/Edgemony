const express = require('express')
const path = require('path')
const app = express()

const PORT = 8000
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./public/home.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./public/about.html'))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./public/contact.html'))
})
app.get('*', (req, res) => {
    res.send('404! Not found')
})

app.listen(PORT, () => {
    console.log('start app')
})