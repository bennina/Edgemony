const express = require('express')
const {people} = require('./data')
//const articoli = require('./articoli')
const app = express()
const PORT = 3000

//middleware per risorse statiche
app.use(express.static('./public'))
//middleware middleware estendono l'uso degli url a tutti gli oggetti compresi sorgenti di dati
//da oggetti innestati e da form
//middleware json estende la gestione del formato per tutti i metodi a livello globale dell'applicazione
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//ROUTING applicazione

//METODO HTTP = GET
app.get('/api/people', (req, res) =>{
    //res.status(200).json({success:true, data:people})
    res.status(200).json({success:true, data:people})
})

//METODO HTTP POST
//Inviamo i dati alla nostra applicazione
app.post('/api/people', (req, res) =>{
    //const {id, name} = req.body //contenuto della richiesta post
    const {id, name} = req.body

    if(!id|| !name){
        return res
        .status(400)
        .json({success:false, msg: 'non trovo un dato necessario'})
    }
        return res
        .status(200)
        .json({success:true, person: {id:id, name:name} })
})

//METODO HTTP POST
//creo un nuovo dato ed espongo tutta la lista
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

//METODO POST CON DATO RICEVUTO DA FORM
app.post('/login' , (req, res) =>{
    const {name} = req.body
    if(name){
        return res
        .status(200)
        .send(`Benvenuto/a ${name}`)
    }
})

//METODO HTTP PUT => /api/people/3
app.put('/api/people/:id', (req, res) =>{
    const {id} = req.params
    //const idT = req.params.id
    const {name} = req.body


    const person = people.find((person) => person.id === Number(id))

    //person = utente secondo il suo id

    //messaggio nel caso l'id non sia esistente
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


app.listen(PORT, () =>{
    console.log(`Server ascolta su porta ${PORT}`)
})