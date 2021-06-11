mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-95.36786464142847, 29.75989741259255],
    zoom: 5
});

// call function to create method and give initial point
let marker = setMarker([-95.3698, 29.7604]);

// call addMapEvent AFTER the marker has been initially set
clickMarker(marker);

// creat new geocoder and assign to variable
let geocoder = setGeocoder();

// add geocoder to map
addGeocoderToMap(geocoder);
addGeocoderEvent(geocoder);


// creates and returns new Geocoder (search box)
function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

// add geocoder to map
function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}

// add event listener to geocoder and set new marker location
function addGeocoderEvent(geocoder) {
    geocoder.on("result", function (event) {
        marker.setLngLat(event.result.geometry.coordinates)
        console.log(event.result.geometry.coordinates)
    })
}

function setMarker(point) {

    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map)
}

function clickMarker(marker) {
    map.on('click', function (event) {
        marker.setLngLat(event.lngLat)
            .addTo(map);
        console.log(marker.setLngLat(event.lngLat))
    })
}

// let coordinates = setGeocoder().event.result.geometry.coordinates;
// console.log(coordinates);


