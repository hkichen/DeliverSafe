
//this shows initial mapp on loading of page, listens for geocodeAddress() and runs on click
map = null;
markers = [];
geocoder = null;

//grabs user input address and runs geocodeAddress
document.getElementById('submit').addEventListener('click', function() {
    var address = document.getElementById('address').value
    geocodeAddress(geocoder, map, address);
});

function initMap() {
    var newCenter = {lat: 33.775618, lng: -84.396285};
    map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: newCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    geocoder = new google.maps.Geocoder(); 
}

//grab user input of address and then geocodes it, puts a marker on the map
function geocodeAddress(geocoder, resultsMap, address) {
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                //center: address,
                position: results[0].geometry.location,
                title: "Your Location"
            });
            console.log(address);
            console.log('lat: ' + marker.position.lat() + ', ' + 'lng: ' + marker.position.lng());
            
            //grab the latlng and set it to place variable
            //use place variable as parameter in ajax call
            var place = {lat: marker.position.lat(), lng: marker.position.lng()};
            console.log(place);
            var queryURL= "https://api.spotcrime.com/crimes.json?lat=" + place.lat + "&lon=" + place.lng + "&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com";
            
            $.ajax({
                url: queryURL,
                method: 'GET'
            }).then(function(response) {
                //console.log(response.crimes[0]);
                //grabs first 10 most recent crimes and adds their type, time, and area to table
                markers = [];
                for(i=0; i < 10; i++){
                    var crimeType = response.crimes[i].type;
                    var crimeTime = response.crimes[i].date;
                    var crimePlace = response.crimes[i].address;
                    var crimeLocation = {lat: response.crimes[i].lat, lng: response.crimes[i].lon};
                    
                    //make a marker on map of each crime location
                    marker = new google.maps.Marker({
                        position: crimeLocation,
                        title: crimeType,
                        map: map
                    })
                    markers.push(marker);
                    //append variables to table, by making new rows for each object
                    $("#crimeTableBody").append(
                        "<tr><td></td>" + 
                        "<td>" + crimeType + "</td>" +
                        "<td>" + crimeTime + "</td>" +
                        "<td>" + crimePlace + "</td></tr>"
                    );
                }
            });
        }
    });
}

//write a reset values function//clears table//clears map
var map = null;
$(document).ready(function() {
    $('map').each(function() {
        // create map
        map = new_map($(this));
    });
    $('#reset').click(function() {
        //clear all markers related to crime data
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i];
            marker.setMap(null)
        }
        $("#crimeTableBody").empty();
       // geocodeAddress(null);
    })
});




