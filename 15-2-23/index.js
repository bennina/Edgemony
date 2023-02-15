const  MongoClient = require('mongodb').MongoClient;

let url = "mongodb+srv://elisabettamonaco:0rqU0e67fEer4Wee@cluster0.zhgxdjx.mongodb.net/school?retryWrites=true"

MongoClient.connect(url).then((db) =>
    {
        accountsDb = db;
        collection = accountsDb.db('school');
        console.log('database connesso');
    })
    .catch((err) => {
        console.log(err);
    });

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbase = db.db("school");

        dbase.createCollection("students", function(err, res) {
            if (err) throw err;
            console.log("Collection creata");
            db.close();
        });
    });

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbase = db.db("school");
        
        dbase.createCollection("courses", function(err, res) {
            if (err) throw err;
            console.log("Collection creata");
            db.close();
        });
    });