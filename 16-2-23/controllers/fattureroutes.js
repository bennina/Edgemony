const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Fattura = mongoose.model('fatturaModel');



router.get('/fattura/list', (req, res) => {
    Fattura.find((err, docs) => {
        if (!err) {
            res.render("listFatture", {
                fatturaList: docs
            });
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

//Form Modifica fatture
function updateFattura(req, res) {
    Fattura.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/fattura/list'); }
            else {
                console.log('Errore durante l\' update : ' + err);
        }
    });
}


//Form Modifica fatture
router.get('/fattura/:id', (req, res) => {
    Fattura.findById(req.params.id, (err, doc) => {
        if (!err) {
            console.log(doc);
            res.render("addFattura", {
                viewTitle: "Aggiornamento",
                fattura: doc
            });
        }
    });
});
//Form Cancella fatture
router.get('/fattura/delete/:id', (req, res) => {
    Fattura.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/fattura/list');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

//Form Inserisci fatture
function insertFattura(req, res) {
    let fattura = new Fattura();
    fattura.cliente = req.body.cliente
    fattura.idFattura = req.body.idFattura
    fattura.dataEmissione = req.body.dataEmissione
    fattura.dataScadenza = req.body.dataScadenza
    fattura.save((err, doc) => {
        if (!err)
            res.redirect('/fattura/list');
            else
                console.log(`Errore nell' inserimento: ${err}`);
        })
    }; 


//NUOVE ROTTE
//Form fatture
router.get('/insertfattura', (req, res) => {
    res.render("addFattura", {
        viewTitle: "Inserisci una nota"
    });
});

//Form Inserisci/modifica fatture
router.post('/fatture', (req, res) => {
    if (req.body._id == '')
        insertFattura(req, res);
    else
        updateFattura(req, res);
});

module.exports = router;