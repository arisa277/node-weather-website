const request = require('request');

const forecast = (latitude, longtitude, callback) => {
  url = `http://api.weatherstack.com/current?access_key=e62d6212ce04db1602a260feb1d3fe5a&query=${latitude},${longtitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. Current temperature is ${body.current.temperature} degrees out, 
      but it feels like ${body.current.feelslike} degrees out. And humidity is ${body.current.humidity}% now.`)
    }
  })
}

module.exports = forecast