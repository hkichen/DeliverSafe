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