const mongoose = require('mongoose');



var fatturaSchema = new mongoose.Schema({
    cliente: {
        type: String,
        
    },
    idFattura: {
        type: String,
      
    },
    dataEmissione: {
        type: String
    },
    dataScadenza: {
        type: String
    }
});




mongoose.model('fatturaModel', fatturaSchema);