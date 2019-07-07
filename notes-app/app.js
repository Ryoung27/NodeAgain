const fs = require('fs')


fs.writeFileSync('notes.txt', 'My name is Ronnie.')

fs.appendFileSync('notes.txt', ' This was the challenge. That doesn\'t add spaces.')