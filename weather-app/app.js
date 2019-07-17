const request = require('request')
const geocode = require('./geocode/geocode.js')
const forecast = require('./utils/forecast')

// const url= 'https://api.darksky.net/forecast/8691e730fc26412960eaba6814fdedbe/36.0331,86.7828?units=us'

// request({url: url, json: true}, (error, response) => {
//     if (error){
//         console.log("Unable to connect to weather services.")
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     }else {
//         console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
//     }

// })

forecast(-75.7008, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

// geocode('Nashville', (error, data) =>{
//     console.log('Error', error)
//     console.log('Data', data)
// })