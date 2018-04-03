<<<<<<< HEAD
        //This call only works if your browser has the CORS plugin!!
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
        // test the above function before presentation to make sure we don't need to place a call to the function here

        // not sure if this is working
        function addToTable() {
            var trHTML = '';
            $.each(response, function (i, item) {
                trHTML += '<tr><td>' + crimes.type + '</td><td>' + crimes.date + '</td><td>' + crimes.address + '</td></tr>';
            });
            $('#crimeTableBody').append(trHTML);
            console.log(addToTable);
        }
        
// could these work too to append to table
        
        // $("#crimeTableBody").append(
        //    "<tr><td>" + crimeLocation + "</td></tr>"    
        // );
        
        //    var createRow = function(data) {
        //        var tBody = $("tbody");
        //        var tRow = $("<tr>");
        //    }
        //    tbody=$("")
        
        })
=======
<<<<<<< HEAD

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
=======
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
>>>>>>> 1abc726035bda522063c9c80176524af9b4391e7

// cleaner code

//do something with that data


<<<<<<< HEAD
// ===============================================================================================
=======
>>>>>>> 1abc726035bda522063c9c80176524af9b4391e7
>>>>>>> d26c76f1cb0daccdbbefa515ae8fcb444cdc3fb6
