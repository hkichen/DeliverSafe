//Google Map call and functionality

function initMap() {
    var newCenter = {lat: 33.761349, lng:-84.389437}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: newCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}

$('#submit').click(function() {
    var yourCenter = $('#addressInput').val();
    console.log(yourCenter);
})