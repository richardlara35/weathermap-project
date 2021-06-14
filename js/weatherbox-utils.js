
function getForecast(latLng) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: latLng[1],
            lon: latLng[0],
            units: 'imperial'
        },
        success: function (data) {
            domStuff(weatherData(data), data.city.name)
            console.log(data);
        }
    })
}
$(document).ready(function(event){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            q: "Greenwich, UK",
            units: 'imperial'
        },
        success: function (data) {
            domStuff(weatherData(data), data.city.name);

        }
    })
})


function currentData(latLng) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: latLng[1],
            lon: latLng[0],
            units: 'imperial'
        },
        success: function (data) {
            currentWeather(data);
        }
    })
}



function weatherData(data){
    var arr = [];

    for (let i = 0; i < data.list.length; i++){
        if (i % 10 === 0){
            arr.push(data.list[i]);
        }
    }
    return arr;
}



