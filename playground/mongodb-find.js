// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

console.log(new ObjectID());

MongoClient.connect('mongodb://localhost:27017/', (err, db)=>{
    if(err){
        return console.log('Unable to connect to mongodb database server' + err);
    }
    console.log('Connected to mongodb server');
    
    var dbo = db.db('TodoApp');

    dbo.collection('Users').find({name: 'Anurag'}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 3));
        
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });

    dbo.collection('Todos').find().count().then((count)=>{
        console.log('Todos'+ count);
        
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });

    db.close();
});