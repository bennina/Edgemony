const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home', {
        title: "Io sono la pagina iniziale",
        subtitle: " ",
        pagepath: " "
    })
})


router.get('/about', (req, res) => {
    res.render('about', {
        title: "CHI SONO",
        subtitle: "Corsi",
        pagepath: "Chi sono"
    })
})

router.get('/contatti', (req, res) => {
    res.render('contatti', {
        title: "WEB DESIGN",
        subtitle: "Sviluppo web",
        pagepath: "Contatti"
    })
})


router.get('/formazione', (req, res) => {
    res.render('formazione', {
        title: "FORMAZIONE",
        subtitle: "Corsi",
        pagepath: "Servizi/Formazione"
    })
})

router.get('/web-design', (req, res) => {
    res.render('web-design', {
        title: "WEB DESIGN",
        subtitle: "Sviluppo web",
        pagepath: "Servizi/Web Design"
    })
})


router.get('*', (req, res) => {
    res.send('404! Not found')
})


module.exports = router