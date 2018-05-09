<?php
require_once('database.php');
require_once('server.php');
require_once('header.php');
include('errors.php');
?>

<section class="bg9 p-b-30">
	<div class="container">
		<h3 class="bg6 text-center p-t-15 p-b-15">Register New Customer</h3>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
			<form class="bgwhite p-b-20 p-l-20 p-t-20 col-xs-12 col-sm-12 col-md-8 col-lg-8" method="post" action="" autocomplete="off">
				<div class="form-group">
					<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="phonenumber" name="phone" maxlength="10" minlength="10" required="required" placeholder="Phone Number" autocomplete="off" />
				</div>
				<div class="form-group">
					<input class="bo9 p-t-10 p-l-10 p-r-7 p-b-7" type="text" name="name" maxlength="25" required="required" placeholder="Full Name" autocomplete="off" />
				</div>
				<div class="form-group">
					<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="password" name="password_1" maxlength="35" required="required" placeholder="Password" autocomplete="off" />
				</div>
				<div class="form-group">
					<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="password" name="password_2" maxlength="35" required="required" placeholder="Confirm Password" autocomplete="off" />
				</div>
				<div>
					<select name="place" id="place" class="bo9 p-t-10 p-l-10 p-r-10 p-b-10">
						<option selected="true" disabled="disabled"  value="">Your Place</option>
						<?php
						$places = array("Bengaluru Urban","Bagalkot","Bellary","Chamarajanagar","Bengaluru Rural","Belgaum","Bidar","Chikkamagaluru","Chikkaballapur","Vijayapura","Kalaburagi","Dakshina Kannada","Chitradurga","Dharwad","Koppal","Hassan","Davanagere","Gadag","Raichur","Kodagu","Kolar","Haveri","Yadgir","Mandya","Ramanagara","Uttara Kannada","Mysuru","Shivamogga","Udupi","Tumakuru","Others");
						sort($places);

						foreach ($places as $value)
							echo "<option value='".$value."'>".$value."</option>\n";
						?>
					</select>
				</div>
				<div class="form-group p-t-10">
					<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="email" name="email" placeholder="Email" autocomplete="off" />
				</div>
				<div class="form-group">
					<button type="button" class="flex-c-m w-size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4" onclick="getLocation();">Locate Me</button>
					<p id="demo">Allow permission for Geolocation after clicking the button below.</p>
					<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="text" name="lat" id="latbox" value="Latitude" autocomplete="off" readonly />
					<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="text" name="lon" id="lngbox" value="Longitude" autocomplete="off" readonly />
					<div id="map">Google Map should display here on clicking the above button</div>
					<span class="s-text8 p-b-10">
						Adjust the marker to your exact location
					</span>
				</div>
				<div class="w-size2">
					<button type="submit" name="reg_customer" class="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
						Register
					</button>
				</div>
				<p>
					Already a member? <a href="customer-login.php"><strong>Sign in</strong></a>
				</p>
			</form>
			<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
		</div>
	</div>
</section>
<?php require_once('footer.php'); ?>

<!-- Loading Google API -->
<script>
	var x = document.getElementById("demo");

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			x.innerHTML = "Geolocation is not supported by this browser.";
			loadLoc();
		}
	}

	function loadLoc() {
		var str = document.getElementById("place").value;
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + str + "&key=AIzaSyAQFgFA-JX5_Xna8TsXVfGtvYn7XrFPuAQ";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var myObj = JSON.parse(this.responseText);
				console.log(myObj.status);
				document.getElementById("latbox").value = myObj.results[0].geometry.location.lat;
				document.getElementById("lngbox").value = myObj.results[0].geometry.location.lng;
			}
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		setTimeout(initMap, 1000);
	}

	function showPosition(position) {
		document.getElementById("latbox").value = position.coords.latitude;
		document.getElementById("lngbox").value = position.coords.longitude;
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
		loadLoc();
	}
</script>
<script>
	var map;
	function initMap() {
		var latlng = new google.maps.LatLng(document.getElementById("latbox").value, document.getElementById("lngbox").value);
		map = new google.maps.Map(document.getElementById('map'), {
			center: latlng,
			zoom: 13,
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
			title: 'Drag this marker to your exact location',
			draggable: true,
		});
		google.maps.event.addListener(marker, 'dragend', function (event) {
			document.getElementById("latbox").value = this.getPosition().lat();
			document.getElementById("lngbox").value = this.getPosition().lng();
		});
	}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmt9muKRq8oFoSiZQw-B0hcG-aBrvUNPo"
async defer></script>
</body>
</html>