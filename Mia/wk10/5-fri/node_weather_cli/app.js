var request = require('request');
var apikey = "bc6cb2e7e1e88f304611203162b9a424"
var city = process.argv[2]


url= "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey + "&units=metric"

request({
    url: url,
    json: true
}, function (error, response, body) {
    console.log(city + " current temperature is " + body.main.temp)
    console.log(url)
    console.log("body", body)
})