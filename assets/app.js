var place = {lat: 33.775618, lng: -84.396285};
        
var queryURL= "https://api.spotcrime.com/crimes.json?lat=" + place.lat + "&lon=" + place.lng + "&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com";
        
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    //console.log(response.crimes[0]);
    //grab specific properties in array
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
    console.log(crimeType);
    console.log(crimeTime);
    console.log(crimeLocation);
});

        
        
        
