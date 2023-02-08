const express = require('express')
const { people } = require('./data')
const app = express()
const PORT = 8000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/api/people', (req, res) => {
    
    res.status(200).json({success:true, data:people})
})

app.get('/api/people', (req, res) => {  
    res.status(200).json({success:true, data:people})
})

app.post('/api/people/new', (req, res) =>{
const {id, name} = req.body
 if(!id|| !name){
        return res
        .status(400)
        .json({success:false, msg: 'non trovo un dato necessario'})
    }
        return res
        .status(201)
        .json({success:true, data: [...people, {id:id, name:name}] })

})

app.post('/login' , (req, res) =>{
    const {name} = req.body
    if(name){
        return res
        .status(200)
        .send(`Benvenuto/a ${name}`)
    }
})

app.put('/api/people/:id', (req, res) =>{
    const {id} = req.params
    //const idT = req.params.id
    const {name} = req.body
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res
        .status(400)
        .json({success:false, msg: `non c'è nessuno con id: ${id}`})
    }

    const newPeople = people.map((person) =>{
        if(person.id === Number(id)){

            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})


})

//METODO HTTP DELETE => /api/people/3
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if(!person){
        return res
        .status(400)
        .json({success: false, msg: `non c'è nessuno con id: ${req.params.id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id ))
    return res
    .status(200)
    .json({success: true, data: newPeople})
})

app.get('*', (req, res) => {
    res.send('404! Not found')
})

app.listen(PORT, () =>{
    console.log(`Server attivo sulla porta ${PORT}`)
})