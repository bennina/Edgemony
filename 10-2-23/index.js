const express = require('express')
const hbs = require('hbs')
const articoli = require('./articoli')
const router = require('./router')
const app = express()
const PORT = 8080

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server attivo su ${PORT}`)
})