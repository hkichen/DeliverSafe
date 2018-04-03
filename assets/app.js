
// should grab latitude and longitute from search results as the criteria for search of crime api

// search for crimes in that area 

// return first 10 most recent crimes in destination area

// should provide offenses [sex crimes, robbery, assault, homicide], locations of offenses, as well as date and if available, name of offender and add them to table as new rows

// "https://api.spotcrime.com/crimes.json?lat= " + [lat] + "&lon= " + [lon] "&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com"


// VARIABLES ===================================================================================


var crime = ;
var destination = ;
var currentLocation = ;
var crimeStats = ;
var offense = ;
var offenseDate = ;
var offenseLoc = [latitude and longitude pulled from search]

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
