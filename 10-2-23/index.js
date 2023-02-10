const express = require('express')
const hbs = require('hbs')
const articoli = require('./articoli.json')

const app = express()
const PORT = 4000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('home', {
        nome: "Elisabetta",
        titolo: "Esercitazione",
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        titolo: "Chi sono io",
    })
})



app.get('/blog', (req, res) => {
    res.render('blog', {
        titolo: "Blog",
    })
})


app.get('/login', (req, res) => {
    res.render('login', {
        titolo: "Accedi",
    })
})

app.listen(PORT, () => {
    console.log(`Server attivo su ${PORT}`)
})