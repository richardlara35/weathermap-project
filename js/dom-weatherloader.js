function domStuff(data, location) {
    $('#forecast-container').html('');
    $('#location').html('');
    $('#location').append(`What's it like in ${location}`);


    cards(data);
}

function cards(data) {
    for (let i = 0; i < data.length; i++) {
        var temp = data[i].main.temp;
        var feelsLike = data[i].main.feels_like;
        var high = data[i].main.temp_max;
        var low = data[i].main.temp_min;

        $('#forecast-container').append(`
      <div class = "card>
<div class = "card-body">
<p class = "card-text">Current Temp: ${temp}<br>
Feels like: ${feelsLike}<br>
High: ${high}<br>
Low: ${low}
<hr>
</p>
</div>
</div>`)
    }
}