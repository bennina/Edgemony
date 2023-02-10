const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    res.render('home', {
        nome: "Elisabetta",
        title: "Io sono la pagina iniziale",
        pageImage: 'https://picsum.photos/1000/800',
    })
})


router.get('/about', (req, res) => {
    res.render('about', {
        title: "Io sono la pagina: about",
        pageImage: 'https://picsum.photos/1000/800',
    })
})



router.get('/blog', (req, res) => {
    res.render('blog', {
        title: "Io sono il Blog",
        pageImage: 'https://picsum.photos/1000/800',
        data: articoli
    })
})


router.get('/login', (req, res) => {
    res.render('login', {
        title: "Accedi",
        pageImage: 'https://picsum.photos/1000/800',
    })
})

router.get('*', (req, res) => {
    res.send('404! Not found')
})


module.exports = router