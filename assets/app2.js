//Google Map call and functionality

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

    //var locationsMarkerInfo = [
    //    [locations.name, locations.address, locations.lat, locations.lng, 0],
    //]

    //later: make this grab a lat:lng when user puts down address -- use geocoding service
    var newCenter = {lat: 33.761349, lng:-84.389437}

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: newCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
    
	var infowindow = new google.maps.InfoWindow({});
	var marker, i;
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var labelIndex = 0;
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i], locations[i]),
			map: map,
            lable: labels[labelIndex++ % labels.length],
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