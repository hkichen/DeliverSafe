<<<<<<< HEAD

// should grab latitude and longitute from search results as the criteria for search of crime api

// search for crimes in that area 

// return first 10 most recent crimes in destination area

// should provide offenses [sex crimes, robbery, assault, homicide], locations of offenses, as well as date and if available, name of offender and add them to table as new rows

// "https://api.spotcrime.com/crimes.json?lat= " + [lat] + "&lon= " + [lon] "&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com"


// VARIABLES ===================================================================================

// global variables
//var crime = "";
$(document).ready(function() {
    var location = {
            lat: 33.777,
            lon: -84.4179
    };

    $("#getCrime").click(function getLocation(){
        var crimeurl = "https://api.spotcrime.com/crimes.json?lat=" + location.lat + "&lon=" + location.lon + "&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com"
    });
}


// var destCity = [should be pulled from search results... latitude and longitude of destination?]
// var destLat = [should be pulled from search results... latitude and longitude of destination?]
// var destLon = [should be pulled from search results... latitude and longitude of destination?]
// .crimes(type, date, address, lat, lon)
// var lat = 
// var lon = 

// =============================================================================================


// POSSIBLE API CALLS ==========================================================================

// crimeSearch = "https://api.spotcrime.com/crimes.json?lat=33.7837971&lon=-84.39996830000001&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com"

// response
    //"crimes" object array includes "type":, "date":, "address":, "lat":, and "lon":

// =============================================================================================


// FUNCTIONS ===================================================================================

$(document).ready(function() {

    var crimeSearch = function(searchSpotCrime) {
        var queryURL = ""
        $.ajax({
            url: queryURL,
            method: "GET"
        // store the retrieved data inside of an object called "response"
          }).then(function(response) {
        // check the query
            console.log(queryURL);
        // check the response
            console.log(response);
        // create a new row
            createRow(response);

        // add data to table body
        var createRow = function(data) {
            var tBody = $("tbody");
            var tRow = $("<tr>");

        // add content to HTML (example taken from bujumbura-solved activity- will need to be modified to fit variables and values of current project)
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);
        });
    }
}

// ===============================================================================================
=======
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

        
        
        
>>>>>>> f53cc3b2692351593a63f8c39a160797d7f1b2b3
