const MongoClient = require("mongodb").MongoClient;
let url = "mongodb+srv://elisabettamonaco:0rqU0e67fEer4Wee@cluster0.zhgxdjx.mongodb.net/school?retryWrites=true";

MongoClient.connect(url)
  .then((db) => {
    accountsDb = db;
    collection = accountsDb.db("school");
    console.log("database connesso");
  })
  .catch((err) => {
    console.log(err);
  });
/*
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("school");

  dbase.createCollection("students", function (err, res) {
    if (err) throw err;
    console.log("Collection creata");
    db.close();
  });
});

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("school");

  dbase.createCollection("courses", function (err, res) {
    if (err) throw err;
    console.log("Collection creata");
    db.close();
  });
});
//Aggiungi dati alla collection
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let myObj = [
    { nome: "Elisabetta", cognome: "Monaco",  matricola: "34567", corsi: "Node JS" },
    { nome: "Giulia", cognome: "Test", matricola: "34566", corsi: "Lettere" },
  ];

  dbase.collection("students").insertMany(myObj, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inseriti: ${res.insertedCount}`);
    db.close();
  });
});
//Aggiungi dati alla collection
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let myObj = [
    { corso: "Lettere", materia: "Scrittura creativa", docenti: "Nome e Cognome"},
    { corso: "Lettere", materia: "Esempio", docenti: "Nome e Cognome" },
    { corso: "Node JS", materia: "Esempio", docenti: "Nome e Cognome" },
  ];

  dbase.collection("courses").insertMany(myObj, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inseriti: ${res.insertedCount}`);
    db.close();
  });
});

//Trova un dato
MongoClient.connect(url, (err, db) =>{
    if (err) throw err;
    let dbase = db.db("school");
    dbase.collection('students').findOne({}, (err, res) =>{
        if (err) throw err;
        console.log(res.nome)
        db.close();
    })
})


MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("school");
    dbase.collection('students').find({}).toArray(function (err, res) {
        if (err) throw err;
        console.log(res)
        db.close();
    })
})

//Cancella dati
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("school");

    let query = {corsi: "Lettere"}
    dbase.collection('students').deleteMany(query, function(err, obj) {
        if (err) throw err;
        console.log(`${obj.result} records cancellati` )
        db.close();
    })
})
*/

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("school");

    let query = {corsi: "Lettere"}
    let newValue = {$set: {corsi: "Letteratura Italiana"}}
    dbase.collection('students').updateOne(query, newValue ,function(err, res) {
        if (err) throw err;
        console.log(`record(s) aggiornati` )
        db.close();
    })
})