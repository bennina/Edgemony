const express = require('express')
const hbs = require('hbs')


const app = express()
const PORT = 4000
const myPreferences = [
    {
        pet: "Dog",
        color: 'blue navi',
        season: 'Winter'
    }
]
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))

app.get('/' , (req, res) =>{
    res.render('home' ,{
        nome: "Elisabetta",
        titolo: "Esercitazione",
        myPreferences: myPreferences,
    })
})


app.get('/about' , (req, res) =>{
    res.render('about', {
        titolo: "Chi sono io",
        myPreferences: myPreferences,
    })
})










app.listen(PORT, () =>{
    console.log(`Server attivo su ${PORT}`)
})