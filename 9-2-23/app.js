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
        myPreferences: myPreferences[0],
    })
})


app.get('/about' , (req, res) =>{
    res.render('about', {
        titolo: "Chi sono io",
        myPreferences: myPreferences[0],
    })
})



app.get('/mi-presento' , (req, res) =>{
    res.render('mi-presento', {
        titolo: "Mi presento",
        myPreferences: myPreferences[0],
    })
})


app.get('/login' , (req, res) =>{
    res.render('login', {
        titolo: "Accedi",
    })
})









app.listen(PORT, () =>{
    console.log(`Server attivo su ${PORT}`)
})