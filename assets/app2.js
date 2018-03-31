var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 33.749, 
            lng: -84.388
        }
    });
}

var broadway = {
    info: '<strong>Chipotle on Broadway</strong><br>\
                5224 N Broadway St<br> Chicago, IL 60640',
    lat: 41.976816,
    long: -87.659916
};

var locations = [
    [broadway.info, broadway.lat, broadway.long, 0],
    [belmont.info, belmont.lat, belmont.long, 1],
    [sheridan.info, sheridan.lat, sheridan.long, 2],
];

var map = new google.maps.Maps(document.getElementById("map"), {
    zoom: 15,
    center: new google.maps.Maps.LatLng(41.976816, -87.659916),
});

