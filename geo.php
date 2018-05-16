<!DOCTYPE html>
<html>
<head>
	<title>AgTrade - Marketing Network for Agriculure Commodities</title>
</head>
<body>

	<p id="demo">Allow permission for Geolocation after clicking the button below.</p>

	<button onclick="getLocation()">Find Me</button>
	<div>
		Latitude : <span id="latbox"></span><br/>
		Longitude : <span id="lngbox"></span><br/>
		Move the Cursor and select your exact location.
	</div>

	<div id="mapholder" style="border:1px black solid; background-color:silver; width:50%;height:400px;">Click on Find Me and Accept permission</div>

	<script>
		var x = document.getElementById("demo");

		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition, showError);
			} else {
				x.innerHTML = "Geolocation is not supported by this browser.";
			}
		}
		function showPosition(position) {
			document.getElementById("latbox").innerHTML = position.coords.latitude;
			document.getElementById("lngbox").innerHTML = position.coords.longitude;
			initMap();
		}
	// Handling Errors

	function showError(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
			x.innerHTML = "User denied the request for Geolocation."
			break;
			case error.POSITION_UNAVAILABLE:
			x.innerHTML = "Location information is unavailable."
			break;
			case error.TIMEOUT:
			x.innerHTML = "The request to get user location timed out."
			break;
			case error.UNKNOWN_ERROR:
			x.innerHTML = "An unknown error occurred."
			break;
		}
	}
	</script>
	<script>
      var map;
      function initMap() {
      	var latlng = new google.maps.LatLng(document.getElementById("latbox").innerHTML, document.getElementById("lngbox").innerHTML);
		map = new google.maps.Map(document.getElementById('mapholder'), {
			center: latlng,
			zoom: 12,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			clickableIcons: false,
		    mapTypeControl: false,
		    streetViewControl: false,
		    overviewMapControl: true,
		    rotateControl: true,
		    panControl: true,
		    zoomControl: true,
			scaleControl: true,
		});
		var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			title: 'Set lat/lon values for this property',
			draggable: true,
		});
		google.maps.event.addListener(marker, 'dragend', function (event) {
			document.getElementById("latbox").innerHTML = this.getPosition().lat();
			document.getElementById("lngbox").innerHTML = this.getPosition().lng();
		});
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmt9muKRq8oFoSiZQw-B0hcG-aBrvUNPo"
    async defer></script>
</body>
</html>
