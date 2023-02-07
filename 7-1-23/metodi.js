const express = require('express')
const {people} = require('./data')
const app = express()
const PORT = 8000

app.use(express.static('./public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/api/people', (req, res) =>{
    res.status(200).json({success:true, data:people})
})
app.post('/api/people', (req, res) =>{
    const {id, name} = req.body 
    if(!id || !name){
        return res
        .status(400)
        .json({success:false, msg: 'non trovo un dato necessario'})
    }
        return res
        .status(200)
        .json({success:true, person: {id:id, name:name} })
})

app.listen(PORT, () =>{
    console.log(`Server ascolta su porta ${PORT}`)
})