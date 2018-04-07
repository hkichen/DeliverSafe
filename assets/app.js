
//this shows initial mapp on loading of page, listens for geocodeAddress() and runs on click
var map = null;
var marker = null;
var markers = [];
var geocoder = null;

//grabs user input address and runs geocodeAddress
document.getElementById('submit').addEventListener('click', function() {

    markers = [];
    $("#crimeTableBody").empty();
    var address = document.getElementById('address').value
    geocodeAddress(geocoder, map, address);
});

function initMap() {
    var newCenter = {lat: 33.775618, lng: -84.396285};
    map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: newCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    geocoder = new google.maps.Geocoder(); 
}

var crimeNumber;
var crimeType;
var crimeTime;
var crimePlace;
var crimeLocation;
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
            //grabs crimes within a quarter mile radius of location
            var place = {lat: marker.position.lat(), lng: marker.position.lng()};
            console.log(place);
            var queryURL= "https://api.spotcrime.com/crimes.json?lat=" + place.lat + "&lon=" + place.lng + "&radius=0.005&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com";
            
            $.ajax({
                url: queryURL,
                method: 'GET'
            }).then(function(response) {
                console.log(response.crimes);
                //grabs all crimes within the radius
                markers = [];
                
                //set variable for how many crimes listed
                crimeNumber = response.crimes.length;
                console.log(crimeNumber);

                for(i=0; i < response.crimes.length; i++){
                    crimeType = response.crimes[i].type;
                    crimeTime = response.crimes[i].date;
                    crimePlace = response.crimes[i].address;
                    crimeLocation = {lat: response.crimes[i].lat, lng: response.crimes[i].lon};
                    //make a marker with label on map of each crime location
                    marker = new google.maps.Marker({
                        position: crimeLocation,
                        title: crimeType,
                        label: (i+1).toString(),
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
                //conditions to set crime rating
                if (crimeNumber <= 2) {
                    console.log("this area is pretty safe");
                    $('#rating').text("This area is pretty chill. " + crimeNumber + " crime(s) reported.");
                    $('.img').append('<img id="safe" src="images/safe.png" />');
                    
                }else if (crimeNumber <= 5) {
                    console.log("Be cautious in this area");
                    $('#rating').text("Use caution in this area. " + crimeNumber + " crime(s) reported.");
                    $('.img').append('<img id="safe" src="images/warning.png" />')
                    

                }else if (crimeNumber > 5) {
                    console.log("This area has high crime activity");
                    $('#rating').text("This area has high crime activity. Hide yo kids, hide yo wife! " + crimeNumber + " crime(s) reported.");
                    $('.img').append('<img id="safe" src="images/sirenLight.png" />')
                }
            });
        }
    });
}

//write a reset values function
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
            marker.setMap(null);
        }
        //clear markers and table
        markers = [];
        marker = null;
        $("#rating").empty();
        $("#crimeTableBody").empty();
        $('.img').empty();
        //run initial map
        initMap();
        $('#address').val('');
    })
});
