
        // gobbledee gook why won't this commit
        
        //This call only works if your browser has the CORS plugin!!
        //ajax call to crime data using a lat and lng
        var place = {
            lat: 33.775618,
            lng: -84.396285
        }
        // https://api.spotcrime.com/crimes.json?lat=" + place.lat + "&lon=" + place.lng + "&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com
        var queryURL= "https://api.spotcrime.com/crimes.json?lat=33.775618&lon=-84.396285&radius=0.02&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com";
        
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

        var response = "[{
            "type":"",
            "date":"",
            "address":""
           }
        ]";
      
      // convert string to JSON
      response = $.parseJSON(response);
      
      $(function() {
          $.each(response, function(i, item) {
              var $tr = $('<tr>').append(
                  $('<td>').text(item.type),
                  $('<td>').text(item.date),
                  $('<td>').text(item.address)
              ); //.appendTo('#crimeTableBody');
              console.log($tr.wrap('<p>').html());
          });
        });

        }
        

