//CRUD Operations create, read, update, delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName);

//     // db.collection('users').insertOne({
//     //     name: 'Richie',
//     //     age: 29
//     // }, (error, result) => {
//     //     if (error){
//     //         return console.log("Unable to insert user.")
//     //     }

//     //     console.log(result.ops)
//     // })

//     db.collection('users').insertMany([{
//         name: 'Ronnie',
//         age: 29
//     }, {
//         name: 'Random',
//         age: 400
//     }
// ], (error, result) => {
//     if (error){
//         return console.log('Unable to insert documents.')
//     }

//     console.log(result.ops)
// })


    db.collection('tasks').insertMany([
        {
        description: 'A string for descriptions',
        completed: true
        },
        {
        description: 'Clean the House',
        completed: false
        },{
        description: 'run',
        completed: false
        }

], (error, result) => {
    if(error){
        return console.log('Unable to insert tasks.')
    }
    console.log(result.ops)
    })
})