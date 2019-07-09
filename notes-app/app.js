const chalk = require('chalk');
const notes = require('./notes.js')
const yargs = require('yargs')

// const command = process.argv[2]
//add, remove, read, list

yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title.',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'A body.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder:{
        title: {
            describe: 'Remove a note.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Print the list.',
    builder:{
        title:{
            describe: 'Print the list.',
            demandOption: false,
            type: 'string'
        }
    },
    handler(){
        console.log('Show the list.')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the list.',
    builder:{
        title:{
            describe: 'Read the list.',
            demandOption: false,
            type: 'string'
        }
    },
    handler(){
        console.log('Print the list.')
    }
})


// console.log(process.argv)
// console.log(yargs.argv)

yargs.parse()

// if (command === 'add'){
//     console.log("Adding note.")
// } else if (command === 'remove'){
//     console.log("Removing note.")
// }