function initMap() {
    var locations = [
        {
            name: "Fountain of Rings",
            address: "265 Park Ave W NW",
            lat: 33.759491,
            lng: -84.392896
        },
        {
            name: "Hard Rock Cafe",
            address: "215 Peachtree St NE",
            lat: 33.759865,
            lng: -84.387381
        },
        {
            name: "STATS Brewpub",
            address: "300 Marietta St NW",
            lat: 33.761453,
            lng: -84.396307
        },
    ];
    
    //var newCenter = $("#addressInput").val();

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: new google.maps.LatLng(33.761349, -84.389437),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
    
	var infowindow = new google.maps.InfoWindow({});
	var marker, i;
    
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i], locations[i]),
			map: map
        });

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i]);
				infowindow.open(map, marker);
			}
		})(marker, i));
    }
    console.log(locations);
}