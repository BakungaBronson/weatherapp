'use strict'

const api = {
    key: "90c5bf9cccea353b89050346b5e8ea1d",
    base: "https://api.openweathermap.org/data/2.5/onecall?",
    units: "mertric"
}

const location = {
    lat: "40.730610",
    lon: "-73.935242",
}

function getResults(){
    fetch(`${api.base}lat=${location.lat}&lon=${location.lon}$units=${api.units}&appid=${api.key}`).then(
        (weather) => { weather.json() }
    ).then(displayResults)
}

function displayResults(weather){
    console.log(weather)
}