const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
let url = "";
mongoose.connect('mongodb+srv://elisabettamonaco:0rqU0e67fEer4Wee@cluster0.zhgxdjx.mongodb.net/demo5?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
    if (!err) {
        console.log('MongoDB connesso.')
    }
    else {
        console.log(`Problemi con la connessione:  ${err}`)
    }
});


require('./nota');
require('./fattura');