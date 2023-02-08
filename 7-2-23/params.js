const express = require('express')

const app = express()
const PORT = 8000

app.get('/', (req,res) =>{
    res.send('Home')
})
app.get('/:id', (req, res) =>{
    res.send(`L'id indicato è: ${req.params.id}`)
})

app.get('/users/:name/:id', (req, res) =>{
res.send(`l'utente con id ${req.params.id} si chiama ${req.params.name}`)
})

app.get('/users/:valore' , (req, res) => {
    res.send(`valore = ${req.params.valore}`)
})

app.get('/login/:id([0-9]{4})' , (req, res) =>{
    res.send(`id ${req.params.id} inserito è lungo 4 caratteri`)
})

app.listen(PORT, () =>{
    console.log(`Server attivo sulla porta ${PORT}`)
})