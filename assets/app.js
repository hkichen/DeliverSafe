function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 33.749, lng: -84.388}
    });
    var geocoder = new google.maps.Geocoder();
    
    $('#submit').on('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            console.log(results[0].geometry.location);
            var e = new google.maps.LatLng(1.1, 1.1);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            var location = e.latLng;
            $("#latLng").text(location);
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });
}


function resetMap() {
    $('#reset').on("click", function() {
        console.log("you clicked me!");  
    })
};