const express = require('express')
const app = express()

const PORT = 8000

app.get('/', (req, res) => {
    res.send('home')
})
app.listen(PORT, () => {
    console.log('start app')
})