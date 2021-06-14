function domStuff(data, location) {
    $('#forecast-container').html('');
    $('#location').html('');
    $('#location').append(`<h3 class="text-white text-center">5 Day Weather Forecast For: ${location}</h3>`);


    currentWeather(data);
    futureForecast(data);
}

function currentWeather(data) {
    let temp = data[0].main.temp;
    let feelsLike = data[0].main.feels_like;
    let high = data[0].main.temp_max;
    let low = data[0].main.temp_min;
    let description = data[0].weather[0].description;
    let wind = data[0].wind.speed;
    let icon = data[0].weather[0].icon;

    $('#forecast-container').append(`
    <div class="card col-2 mx-4">
    <p class="card-text">
    <p class = "card-text">Currently: ${temp}°F<br>
    ${description}
    <img src="http://openweathermap.org/img/w/${icon}.png"><br>
Feels like: ${feelsLike}°F<br>
High: ${high}°F<br>
Low: ${low}°F<br>
Wind: ${wind} MPH
</p>
</div>
    `)
}


function futureForecast(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let high = data[i].main.temp_max;
        let low = data[i].main.temp_min;
        let description = data[i].weather[0].description;
        let icon = data[i].weather[0].icon;
        let wind = data[i].wind.speed;

        $('#forecast-container').append(`
      <div class = "card card col-2 mx-4">
<div class = "card-body">
<p class = "card-text">${description}
<img src="http://openweathermap.org/img/w/${icon}.png"><br>
High: ${high}°F<br>
Low: ${low}°F<br>
Wind: ${wind} MPH
<hr>
</p>
</div>
</div>`)
    }
}