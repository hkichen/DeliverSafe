//make initial map show up on the page
var map;

$("#getMap").click(function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: -34.397,
			lng: 150.644
		},
		zoom: 15
    });
});

//grabb locations via array locations inside an array---CONVERT TO Array of objects!
var locations = [
    ['Assault', -33.890542, 151.274856, 4],
    ['Armed Robbery', -33.923036, 151.259052, 5],
    ['Breaking and Entering', -34.028249, 151.157507, 3],
    ['Arson', -33.80010128657071, 151.28747820854187, 2],
    ['Homicide', -33.950198, 151.259302, 1]
];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(-33.92, 151.25),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });
    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}