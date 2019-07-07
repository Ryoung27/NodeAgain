const chalk = require('chalk');
const validator = require('validator')
const getNotes = require('./notes.js')

const message = getNotes()


console.log(chalk.blue(message))

console.log(chalk.green.bold.inverse("Success!"))

console.log(chalk.dim.blue("testy"))

console.log(validator.isEmail('blank@blank.com'))
console.log(validator.isURL('rryoung.com'))