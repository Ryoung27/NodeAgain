const request = require('request')

const url= 'https://api.darksky.net/forecast/8691e730fc26412960eaba6814fdedbe/36.0331,86.7828?units=us'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.currently)
    console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
})