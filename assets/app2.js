//global variable to store user's address to be used in calling crime data api
//Google Map call and functionality
function initMap() {
    var newCenter = {lat: 33.761349, lng:-84.389437}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: newCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var geocoder = new google.maps.Geocoder();
    
    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

//grab user input of address and then geocodes it, puts a marker on the map
var yourAddress;
function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            console.log('lat: ' + marker.position.lat() + ', ' + 'lng: ' + marker.position.lng());
            //console.log(marker.position.lng())
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
        yourAddress = {lat: (marker.position.lat()), lng: (marker.position.lng())}
    });
}