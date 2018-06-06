// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

console.log(new ObjectID());
MongoClient.connect('mongodb://localhost:27017/', (err, db)=>{
    if(err){
        return console.log('Unable to connect to mongodb database server' + err);
    }
    console.log('Connected to mongodb server');
    
    var dbo = db.db('TodoApp');

    // dbo.collection('Todos').insertOne({
    //     text: 'Hi this is me',
    //     completed: true
    // },(err, result)=>{
    //     if(err){
    //         console.log('Error while inserting document'+ err);
    //     }
    //     else{
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

    dbo.collection('Users').insertOne({
        name: "Anurag",
        age: 21,
        location: "Ambedkarnagar"
    }, (err,result)=>{
        if(err){
            console.log('Error while inserting user doc');
        }else{
            console.log(JSON.stringify(result.ops, undefined, 3));
        }
    });

    db.close();
});