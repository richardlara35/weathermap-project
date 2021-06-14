mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [0,0],
    zoom: 2
});


let marker;


// clickMarker(marker);


let geocoder = setGeocoder();

mapEvent();
addGeocoderToMap(geocoder);


function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}


function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);

    geocoder.on('result', function (event) {
        setMarker(event.result.geometry.coordinates);

        getForecast(event.result.geometry.coordinates);
        currentData(event.result.geometry.coordinates);

    })
}


function setMarker(point) {


    if (!marker) {
        marker = new mapboxgl.Marker().setLngLat(point)
            .addTo(map)
    } else {
        marker.setLngLat(point);
    }
}

function mapEvent(){
    map.on('click', function (event){
        setMarker(event.lngLat);

        getForecast([event.lngLat.lng,event.lngLat.lat]);
        currentData([event.lngLat.lng,event.lngLat.lat]);
    })
}




