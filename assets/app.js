//This call onyl works if your brownser has the CORS plugin!!
//ajax call to crime data using a lat and lng
var place = {
    lat: 33.775618,
    lng: -84.396285
}

var queryURL= "https://api.spotcrime.com/crimes.json?lat=" + place.lat + "&lon=" + place.lng + "&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com";

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    console.log(response.crimes[0]);
    var crimeLocation = [
        {
            lat: response.crimes.lat,
            lng: response.crimes.lon
        }
    ];

    //var createRow = function(data) {
    //    var tBody = $("tbody");
    //    var tRow = $("<tr>");
   //}
   //tbody=$(crimeLocation).
})

//do something with that data



