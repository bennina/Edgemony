const  MongoClient = require('mongodb').MongoClient;
//let url = "mongodb+srv://db_user:elisabettamonaco@mycluster.azlqk.mongodb.net/school?retryWrites=true";

let url = "mongodb+srv://elisabettamonaco:0rqU0e67fEer4Wee@cluster0.zhgxdjx.mongodb.net/test"

MongoClient.connect(url).then((db) =>
    {
        accountsDb = db;
        collection = accountsDb.db('school');
        console.log('database connesso');
    })
    .catch((err) => {
        console.log(err);
    });