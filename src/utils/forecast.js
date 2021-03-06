const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/46deca35d6d620c8752cb8f222f12296/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather Service!', undefined)
        } else if (body.error) {
            callback('Unable to find Location!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees Celsius out.' + ' The Temperature High today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is ' + body.currently.precipProbability + ' % chance of rain.')
        }
    })
} 

module.exports = forecast