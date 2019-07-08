// const fs = require('fs')

const fs = require('fs')

const andrewBuffer = fs.readFileSync('1-json.json')

const dataJSON = andrewBuffer.toString()


const user = JSON.parse(dataJSON)
user.name = 'Richie'
user.age = '29'

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)



// // const bookJSON = JSON.stringify(book)

// // console.log(book.title)
// // fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)


// console.log(data.title)