const express = require('express')
const hbs = require('hbs')
const articoli = require('./articoli')

const app = express()
const PORT = 4000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('home', {
        nome: "Elisabetta",
        title: "Io sono la pagina iniziale",
        pageImage: 'https://picsum.photos/1000/800',
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: "Io sono la pagina: about",
        pageImage: 'https://picsum.photos/1000/800',
    })
})



app.get('/blog', (req, res) => {
    res.render('blog', {
        title: "Io sono il Blog",
        pageImage: 'https://picsum.photos/1000/800',
        data: articoli
    })
})


app.get('/login', (req, res) => {
    res.render('login', {
        title: "Accedi",
        pageImage: 'https://picsum.photos/1000/800',
    })
})

app.listen(PORT, () => {
    console.log(`Server attivo su ${PORT}`)
})