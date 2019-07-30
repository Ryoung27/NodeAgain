const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewURLParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const Task = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }

})

const run = new Task({
    description: 'Go for a run.',
    completed: true
})

run.save().then(() =>{
    console.log(run)
}).catch((error) => {
    console.log('Error', error)
})

// const me = new User({
//     name: 'Richie',
//     age: 29
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })