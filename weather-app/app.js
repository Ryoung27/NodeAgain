const request = require('request')

const url= 'https://api.darksky.net/forecast/8691e730fc26412960eaba6814fdedbe/37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})