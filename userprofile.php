<?php
require_once('database.php');
require_once('server.php');

if(isset($_SESSION['customer']) && !empty($_SESSION['customer'])){
	$id = $_SESSION['id'];
	$profiletable = "customers";
}
else if(isset($_SESSION['vendor']) && !empty($_SESSION['vendor'])){
	$id = $_SESSION['id'];
	$profiletable = "vendors";
}
else
	header('location: index.php');

if(isset($_POST['updateprofile'])) {
	$name = mysqli_real_escape_string($db, $_POST['name']);
	$place = mysqli_real_escape_string($db, $_POST['place']);
	$email = mysqli_real_escape_string($db, $_POST['email']);
	$lat = mysqli_real_escape_string($db, $_POST['lat']);
	$lon = mysqli_real_escape_string($db, $_POST['lon']);
	// form validation: ensure that the form is correctly filled
	if (empty($name)) { array_push($errors, "Name is required"); }
	if (empty($place)) { array_push($errors, "Place is required"); }
	if ($password_1 != $password_2) {
		array_push($errors, "The two passwords do not match");
	}
	if (($lat > 90 || $lat < -90) && ($lon > 180 || $lon < -180)) {
		array_push($errors, "Error while reading coordinates");
	}

// register user if there are no errors in the form
	if (count($errors) == 0) {
		$res = mysqli_query($db, "UPDATE $profiletable set name='$name', place='$place', email='$email', lat=$lat, lon=$lon WHERE id=$id");
		if(!$res)
			array_push($errors,mysqli_error());
		if(mysqli_affected_rows($db)>=1)
			array_push($success,"User Profile updated successfully");
		else
			array_push($errors,"User Profile failed to be updated");
	}
}
if(isset($_POST['changepassword'])) {
	$password_old = mysqli_real_escape_string($db, $_POST['password_old']);
	$password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
	$password_2 = mysqli_real_escape_string($db, $_POST['password_2']);

	// form validation: ensure that the form is correctly filled
	if (empty($password_old)) { array_push($errors, "Old Password is required"); }
	if (empty($password_1)) { array_push($errors, "New Password is required"); }
	if ($password_1 != $password_2) {
		array_push($errors, "The two passwords do not match");
	}

	$password = $password_old;
	$res = mysqli_query($db, "SELECT saltstring FROM $profiletable WHERE id=$id");
	$first = mysqli_fetch_assoc($res);
	$randstr = $first["saltstring"];

	$salt = sha1(md5($password)).$randstr;
	$password = md5($password.$salt);

	echo "SELECT id, name FROM $profiletable WHERE id=$id AND password='$password'";
	if (mysqli_num_rows(mysqli_query($db, "SELECT id FROM $profiletable WHERE id=$id AND password='$password'")) <= 0) {
		array_push($errors,"Old Password is incorrect !!<br/><a href='iforgot.php' >Forgot Password</a>");
	}
// change password if old password if matched
	if (count($errors) == 0) {
		$password = $password_1;
		$randstr = getRandomString();
		$salt = sha1(md5($password)).$randstr;
		$password = md5($password.$salt);
		$res = mysqli_query($db, "UPDATE $profiletable set saltstring='$randstr', password='$password' WHERE id=$id");
		if(!$res)
			array_push($errors,mysqli_error());
		if(mysqli_affected_rows($db)>=1)
			array_push($success,"User password successfully changed");
		else
			array_push($errors,"User password failed to change");
	}
}

require_once('header.php'); 

$res = mysqli_query($db, "SELECT name, place, phone, email, lat, lon FROM $profiletable WHERE id=$id");

if(!$res) {
	array_push($errors, mysqli_error($db));
}

include('errors.php');
?>

<?php
if(mysqli_num_rows($res) <= 0) {
	?>
	<section class="bgwhite text-center p-t-10 p-b-30">
		<div class="container">
			<h3 class="center">Error Occured !!</h3>
			<h3><a href="index.php" alt="AgMarket Home Page" style="text-decoration: underline;">CLICK HERE</a> to go to main page</h3>
		</div>
	</section>
	<?php
}
else {
	$first = mysqli_fetch_assoc($res);
	$name = $first['name'];
	$place = $first['place'];
	$phone = $first['phone'];
	$email = $first['email'];
	$lat = $first['lat'];
	$lon = $first['lon'];
	?>
	<!-- Cart -->
	<section class="cart bgwhite p-t-5">
		<div class="container">
			<?php
			if(isset($_SESSION['vendor']) && !empty($_SESSION['vendor'])){
				$averageRating = 0;
				$countRating = 0;
			// get average
				$query = "SELECT ROUND(AVG(rating),1) as averageRating, count(*) as countRating FROM rating WHERE vid=$id";
				$avgresult = mysqli_query($db,$query);
				if(!$avgresult)
					array_push($errors,mysqli_error());
				if(mysqli_num_rows($avgresult)>=1) {
					$fetchAverage = mysqli_fetch_array($avgresult);
					$averageRating = $fetchAverage['averageRating'];
					$countRating = $fetchAverage['countRating'];
				}
				if($averageRating <= 0) {
					$averageRating = "No Ratings yet";
					$countRating = 0;
				}
				?>
				<!-- Rating -->
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
					<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
						<h3 class="bg6 text-center p-b-15">Vendor Ratings</h3>
						<h5 class="text-center p-b-15">
							Average Rating : <span id='avgrating_<?php echo $id; ?>'><?php echo $averageRating."(".$countRating.")"; ?></span>
						</h5>
						<div class="text-center p-b-15">
							<?php
							for($x=1;$x<=5;$x++) {
								?>
								<i class="fa fa-star fa-2x star <?php
								if($x<=floor($averageRating))
									echo "star-checked";
								?>"></i>
								<?php
							}
							?>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
				</div>
				<?php
			}
			?>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
				<form class="bgwhite p-b-20 p-l-20 p-t-20 col-xs-12 col-sm-12 col-md-8 col-lg-8" method="post" action="" autocomplete="off">
					<h3 class="bg6 text-center p-t-15 p-b-15">Update Profile</h3>
					<div class="form-group">
						Phone Number: 
						<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="phonenumber" maxlength="10" minlength="10" required="required" placeholder="Phone Number" autocomplete="off" value="<?php echo $phone; ?>" readonly />
						<span class="p-t-20"><i class="fa fa-ban" style="font-size:34px"></i></span>
					</div>
					<div class="form-group">
						Name: 
						<input class="bo9 p-t-10 p-l-10 p-r-7 p-b-7" type="text" name="name" maxlength="25" required="required" placeholder="Full Name" value="<?php echo $name; ?>" autocomplete="off" />
					</div>
					<div>
						<select name="place" id="place" class="bo9 p-t-10 p-l-10 p-r-10 p-b-10">
							<option selected="true" disabled="disabled"  value="">Your Place</option>
							<?php
							$places = array("Bengaluru Urban","Bagalkot","Bellary","Chamarajanagar","Bengaluru Rural","Belgaum","Bidar","Chikkamagaluru","Chikkaballapur","Vijayapura","Kalaburagi","Dakshina Kannada","Chitradurga","Dharwad","Koppal","Hassan","Davanagere","Gadag","Raichur","Kodagu","Kolar","Haveri","Yadgir","Mandya","Ramanagara","Uttara Kannada","Mysuru","Shivamogga","Udupi","Tumakuru","Others");
							sort($places);

							foreach ($places as $value) {
								echo "<option value='".$value."'";
								if($value==$place)
									echo " selected";
								echo ">".$value."</option>\n";
							}
							?>
						</select>
					</div>
					<div class="form-group p-t-10">
						Email ID: 
						<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="email" name="email" placeholder="Email" value="<?php echo $email; ?>" autocomplete="off" />
					</div>
					<div class="form-group">
						<button type="button" class="flex-c-m w-size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4" onclick="getLocation();">Locate Me</button>
						<p id="demo">Allow permission for Geolocation after clicking the button below.</p>
						<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="text" name="lat" id="latbox" autocomplete="off" value="<?php echo $lat; ?>" readonly />
						<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="text" name="lon" id="lngbox" autocomplete="off" value="<?php echo $lon; ?>" readonly />
						<div id="map">Google Map should display here on clicking the above button</div>
						<span class="s-text8 p-b-10">
							Adjust the marker to your exact location
						</span>
					</div>
					<div class="w-size2">
						<button type="submit" name="updateprofile" class="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
							Save
						</button>
					</div>
				</form>
				<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
				<form class="bgwhite p-b-20 p-l-20 p-t-20 col-xs-12 col-sm-12 col-md-8 col-lg-8" method="POST" action="" autocomplete="off">
					<h3 class="bg6 text-center p-t-35 p-b-15">Change Password</h3>
					<div class="form-group p-t-15">
						Old Password:
						<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="password" name="password_old" maxlength="35" required="required" placeholder="Old Password" autocomplete="off" />
					</div>
					<div class="form-group">
						New Password:
						<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="password" name="password_1" minlength="5" maxlength="35" required="required" placeholder="New Password" autocomplete="off" />
					</div>
					<div class="form-group">
						Confirm Password:
						<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="password" name="password_2" minlength="5" maxlength="35" required="required" placeholder="Confirm Password" autocomplete="off" />
					</div>
					<div class="form-group">
						<button type="submit" name="changepassword" class="t-center w-size2 flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
							Change Password
						</button>
					</div>
				</form>
				<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
			</div>
		</div>
	</section>
	<?php
}
?>
<hr/>
<?php require_once('footer.php'); ?>
<!--===============================================================================================-->
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
<!-- Loading Google API -->
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
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmt9muKRq8oFoSiZQw-B0hcG-aBrvUNPo&callback=initMap"
async defer></script>
</body>
</html>