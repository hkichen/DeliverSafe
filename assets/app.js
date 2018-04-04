var place = {lat: 33.775618, lng: -84.396285};
        
var queryURL= "https://api.spotcrime.com/crimes.json?lat=" + place.lat + "&lon=" + place.lng + "&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com";
        
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    console.log(response.crimes[0]);
    var crimeLocation = [{lat: response.crimes.lat, lng: response.crimes.lon}]
    
    //grab a specific property from object and put it in a table
    for(i=0; i < 10; i++){
        var crimeType = response.crimes[i].type;
        var crimeTime = response.crimes[i].date;
        var crimeLocation = [{lat: response.crimes[i].lat, lng: response.crimes[i].lon}];

        //append variables to table, by making new rows for each object
    }
    console.log(crimeType);
    console.log(crimeTime);
    console.log(crimeLocation);
});

        
        
        