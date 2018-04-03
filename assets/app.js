
// should grab latitude and longitute from search results as the criteria for search of crime api

// search for crimes in that area 

// return first 10 most recent crimes in destination area

// should provide offenses [sex crimes, robbery, assault, homicide], locations of offenses, as well as date and if available, name of offender and add them to table as new rows

// "https://api.spotcrime.com/crimes.json?lat= " + [lat] + "&lon= " + [lon] "&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com"


// VARIABLES ===================================================================================

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

    // need function to register when "Search" button is clicked
    // grab lat and long from search response
    // need function to send API call which grabs the lat and long from the response 
    // then add/concatenates this as criteria in API call
    // then call function
    // add response to table and mark on the map 
    
    var crimeSearch = function(searchSpotCrime) {
        // could not get this to work, plug in once testing to table has been successful
        //try again to obtain key from spotcrime?
        // var queryURL = `https://api.spotcrime.com/crimes.json?lat="${33.761349}"&lon="${-84.389437}"&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com`
        
        var queryURL = 'https://api.spotcrime.com/crimes.json?lat=33.7837971&lon=-84.39996830000001&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com'
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
        crimesearch()

        // add data to table body
        var createRow = function(data) {
            var tBody = $("tbody");
            var tRow = $("<tr>");

            $("#crimeTableHead").append(
                "<tr><td>" + response.crimes("type", "date", "address") + "</td></tr>"
            )

        });
    }
}

// ===============================================================================================
