const validator = require('validator')
const getNotes = require('./notes.js')

const message = getNotes()


console.log(message)

console.log(validator.isEmail('blank@blank.com'))
console.log(validator.isURL('rryoung.com'))