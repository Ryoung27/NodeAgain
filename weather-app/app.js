const request = require('request')

const url= 'https://api.darksky.net/forecast/8691e730fc26412960eaba6814fdedbe/36.0331,86.7828?units=us'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.currently)
    console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
})

//Geocoding
//Address -> Lat/Long -> Weather
// pk.eyJ1IjoicnlvdW5nMjciLCJhIjoiY2p5NGlvZXhvMDB2MjNtbzBwOXE2cTNpMiJ9.RVtsgLTT9EhIDPIFT0wVlg

const geocodeURL= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicnlvdW5nMjciLCJhIjoiY2p5NGlvZXhvMDB2MjNtbzBwOXE2cTNpMiJ9.RVtsgLTT9EhIDPIFT0wVlg&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})