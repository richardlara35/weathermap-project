$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast",
    type: "GET",
    data: {
        APPID: OPEN_WEATHERMAP_TOKEN,
        lat: coordinates[0],
        lon: coordinates[1],
        units: 'imperial'
    },
    success: function (data) {
        console.log(data);
    }
})



