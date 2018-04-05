
//this shows initial mapp on loading of page, listens for geocodeAddress() and runs on click
function initMap() {
    var newCenter = {lat: 33.761349, lng:-84.389437}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: newCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById('address').value;    
    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map, address);
    });
}

//grab user input of address and then geocodes it, puts a marker on the map
function geocodeAddress(geocoder, resultsMap, address) {
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
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
                for(i=0; i < 10; i++){
                    var crimeType = response.crimes[i].type;
                    var crimeTime = response.crimes[i].date;
                    var crimePlace = response.crimes[i].address;
                    var crimeLocation = [{lat: response.crimes[i].lat, lng: response.crimes[i].lon}];

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



