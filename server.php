<?php
session_start();
$errors = array();
$success = array();

function sendSms($number, $message) {
	// $authKey = "209549A6j7ZUX5I8By5ace616c";		// Bibek Singh ko
	$authKey = "214511AjSNk4gz5zj5af2336e";			// Prashant Shahi ko

	$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_URL => "http://api.msg91.com/api/sendhttp.php?sender=AgMrkt&route=4&mobiles=".$number."&authkey=".$authKey."&encrypt=&country=91&message=".urlencode($message),
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "GET",
		CURLOPT_SSL_VERIFYHOST => 0,
		CURLOPT_SSL_VERIFYPEER => 0,
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ($err) {
		return "cURL Error #:" . $err;
	} else {
		return $response;
	}
}

function sendOtp($number) {
	$authKey = "214511AjSNk4gz5zj5af2336e";
	$message = "Your verification code is ##OTP##. It will be valid for 24 hours. -- AgMarket.in";
	/*
		{
		  "message": "38656c766a45373236333334",
		  "type": "success"
		}
		{
		  "message": "38656c76745a313333383333",
		  "type": "success"
		}
		{
		  "message": "Please Enter valid mobile no",
		  "type": "error"
		}
	*/

	// ###OTP###
	$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_URL => "http://control.msg91.com/api/sendotp.php?otp_length=7&authkey=".$authKey."&message=".urlencode($message)."&sender=AgMart&mobile=".$number,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "POST",
		CURLOPT_POSTFIELDS => "",
		CURLOPT_SSL_VERIFYHOST => 0,
		CURLOPT_SSL_VERIFYPEER => 0,
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ($err) {
		return "cURL Error #:" . $err;
	} else {
		return $response;
	}
}
function resendOtp($number, $retrytype) {
	$authKey = "214511AjSNk4gz5zj5af2336e";

	/*
	http://control.msg91.com/api/retryotp.php?authkey=214511AjSNk4gz5zj5af2336e&mobile=8880517895&retrytype=text
	{
	  "type": "error"
	}
	*/


	$curl = curl_init();
	curl_setopt_array($curl, array(
		CURLOPT_URL => "http://control.msg91.com/api/retryotp.php?authkey=".$authKey."&mobile=".$number."&retrytype=".$retrytype,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "POST",
		CURLOPT_POSTFIELDS => "",
		CURLOPT_SSL_VERIFYHOST => 0,
		CURLOPT_SSL_VERIFYPEER => 0,
		CURLOPT_HTTPHEADER => array(
			"content-type: application/x-www-form-urlencoded"
		),
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ($err) {
		return "cURL Error #:" . $err;
	} else {
		return $response;
	}
}

function verifyOtp($number, $otp) {
	$authKey = "214511AjSNk4gz5zj5af2336e";
	/*
	{
	  "message": "otp_verified",
	  "type": "success"
	}
	*/

	$curl = curl_init();
	curl_setopt_array($curl, array(
		CURLOPT_URL => "https://control.msg91.com/api/verifyRequestOTP.php?authkey=".$authkey."&mobile=".$number."&otp=".$otp,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "POST",
		CURLOPT_POSTFIELDS => "",
		CURLOPT_SSL_VERIFYHOST => 0,
		CURLOPT_SSL_VERIFYPEER => 0,
		CURLOPT_HTTPHEADER => array(
			"content-type: application/x-www-form-urlencoded"
		),
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ($err) {
		return "cURL Error #:" . $err;
	} else {
		return $response;
	}
}
function getRandomString() {
	$length = 20;
	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$randomString = '';
	for ($i = 0; $i < $length; $i++) {
		$randomString .= $characters[rand(0, strlen($characters) - 1)];
	}
	return $randomString;
}
function distance($lat1, $lon1, $lat2, $lon2, $unit) {
	$theta = $lon1 - $lon2;
	$dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
	$dist = acos($dist);
	$dist = rad2deg($dist);
	$miles = $dist * 60 * 1.1515;
	$unit = strtoupper($unit);

	if ($unit == "K") {
		return ($miles * 1.609344);
	}
	else if ($unit == "METER") {
		return ($miles * 1.609344/1000);
	} else if ($unit == "N") {
		return ($miles * 0.8684);
	} else {
		return $miles;
	}
}

// REGISTER Customer
if (isset($_POST['reg_customer'])) {
// receive all input values from the form
	$phone = mysqli_real_escape_string($db, $_POST['phone']);
	$name = mysqli_real_escape_string($db, $_POST['name']);
	$password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
	$password_2 = mysqli_real_escape_string($db, $_POST['password_2']);
	$place = mysqli_real_escape_string($db, $_POST['place']);
	$email = mysqli_real_escape_string($db, $_POST['email']);
	$lat = mysqli_real_escape_string($db, $_POST['lat']);
	$lon = mysqli_real_escape_string($db, $_POST['lon']);


// form validation: ensure that the form is correctly filled
	if (empty($name)) { array_push($errors, "Name is required"); }
	if (empty($phone) || strlen($phone)!=10) { array_push($errors, "Valid Phone Number is required"); }
	if (empty($password_1)) { array_push($errors, "Password is required"); }
	if (empty($place)) { array_push($errors, "Place is required"); }
	if ($password_1 != $password_2) {
		array_push($errors, "The two passwords do not match");
	}
	if (($lat > 90 || $lat < -90) && ($lon > 180 || $lon < -180)) {
		array_push($errors, "Error while reading coordinates");
	}
	if (mysqli_num_rows(mysqli_query($db, "SELECT * FROM customers WHERE phone='$phone'")) >= 1) {
		array_push($errors,"User already exists. <a href=\"customer-login.php\">Sign in</a>");
	}
// register user if there are no errors in the form
	if (count($errors) == 0) {
		$password = $password_1;
		$randstr = getRandomString();
		$salt = sha1(md5($password)).$randstr;
		$password = md5($password.$salt);

		$query = "INSERT INTO customers (name , password, phone, place,email, lat, lon, saltstring) 
		VALUES('$name', '$password', '$phone', '$place', '$email', '$lat', '$lon','$randstr')";

		$res = mysqli_query($db, $query);
		if($res) {
			array_push($success,"Registration Successful. Sign-in");
			$_SESSION['success'] = "Registration Complete.";
			header('location: customer-login.php');
		}
		else {
			array_push($errors,"A error occured: " . mysqli_error($db));
			header('location: customer-register.php');
		}
	}

}
else if (isset($_POST['login_customer'])) {
	$phone = mysqli_real_escape_string($db, $_POST['phone']);
	$password = mysqli_real_escape_string($db, $_POST['password']);
	if (empty($phone)) {
		array_push($errors, "Phone is required");
	}
	if (empty($password)) {
		array_push($errors, "Password is required");
	}
	if (count($errors) == 0) {
		$res=mysqli_query($db, "SELECT saltstring FROM customers WHERE phone='$phone'");
		$first = mysqli_fetch_assoc($res);
		$randstr = $first["saltstring"];

		$salt = sha1(md5($password)).$randstr;
		$password = md5($password.$salt);


		$res=mysqli_query($db, "SELECT id, name,email FROM customers WHERE phone='$phone' AND password='$password'");
		if(mysqli_num_rows($res)>0) {
			$_SESSION['customer'] = $phone;
			$_SESSION['success'] = "You are now logged in";
			$first = mysqli_fetch_assoc($res);
			$_SESSION['name'] = $first["name"];
			$_SESSION['email'] = $first["email"];
			$_SESSION['id'] = $first["id"];
			header('location: customer-index.php');
		}
		else {
			array_push($errors, "Wrong username/password combination");
		}
	}
}

// REGISTER Vendor
if (isset($_POST['reg_vendor'])) {
// receive all input values from the form
	$phone = mysqli_real_escape_string($db, $_POST['phone']);
	$name = mysqli_real_escape_string($db, $_POST['name']);
	$password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
	$password_2 = mysqli_real_escape_string($db, $_POST['password_2']);
	$place = mysqli_real_escape_string($db, $_POST['place']);
	$email = mysqli_real_escape_string($db, $_POST['email']);
	$lat = mysqli_real_escape_string($db, $_POST['lat']);
	$lon = mysqli_real_escape_string($db, $_POST['lon']);


// form validation: ensure that the form is correctly filled
	if (empty($name)) { array_push($errors, "Name is required"); }
	if (empty($phone)) { array_push($errors, "Phone Number is required"); }
	if (empty($password_1)) { array_push($errors, "Password is required"); }
	if (empty($place)) { array_push($errors, "Place is required"); }
	if ($password_1 != $password_2) {
		array_push($errors, "The two passwords do not match");
	}
	if (($lat > 90 || $lat < -90) && ($lon > 180 || $lon < -180)) {
		array_push($errors, "Error while reading coordinates");
	}
	if (mysqli_num_rows(mysqli_query($db, "SELECT * FROM vendors WHERE phone='$phone'")) >= 1) {
		array_push($errors,"Account with that phone number already exists. <a href=\"vendor-login.php\">Sign in</a>");
	}
// register user if there are no errors in the form
	if (count($errors) == 0) {
		$password = $password_1;
		$randstr = getRandomString();
		$salt = sha1(md5($password)).$randstr;
		$password = md5($password.$salt);

		$query = "INSERT INTO vendors (name , password, phone, place,email, lat, lon, saltstring) VALUES('$name', '$password', $phone, '$place', '$email', $lat, $lon,'$randstr')";

		$res = mysqli_query($db, $query);
		if($res) {	
			array_push($success,"Registration Successful");
			header('location: vendor-login.php');
		}
		else {
			array_push($errors,"A error occured: " . mysqli_error($db));
			header('location: vendor-register.php?res='.$res."&randstr=".$randstr."&password=".$password);
		}
	} 
}
else if (isset($_POST['login_vendor'])) {
	$phone = mysqli_real_escape_string($db, $_POST['phone']);
	$password = mysqli_real_escape_string($db, $_POST['password']);
	if (empty($phone)) {
		array_push($errors, "Phone is required");
	}
	if (empty($password)) {
		array_push($errors, "Password is required");
	}
	if (count($errors) == 0) {
//		array_push($errors, "Password before salt: ".$password);
		$res=mysqli_query($db, "SELECT saltstring FROM vendors WHERE phone='$phone'");
		if(mysqli_num_rows($res)<=0) {
			array_push($errors, "This Phone number is not registered");
		}
		$first = mysqli_fetch_assoc($res);
		$randstr = $first["saltstring"];
		$salt = sha1(md5($password)).$randstr;
//		array_push($errors, "md5(password): ".md5($password));
		$password = md5($password.$salt);

		$res=mysqli_query($db, "SELECT * FROM vendors WHERE phone='$phone' AND password='$password'");
		if(mysqli_num_rows($res)>0) {
			$_SESSION['vendor'] = $phone;
			$_SESSION['success'] = "You are now logged in";
			$first = mysqli_fetch_assoc($res);
			$_SESSION["name"] = $first["name"];
			$_SESSION['email'] = $first["email"];
			$_SESSION["id"] = $first["id"];
			header('location: vendor-index.php');
		}
		else {
			array_push($errors, "Wrong phone number/password combination");
//			array_push($errors, "Salt: ".$salt);
//			array_push($errors, "Password after salt: ".$password);
//			array_push($errors, "Random string: ".$randstr);
		}
	}
}
// Logout and end session
if (isset($_GET['logout'])){
	if(isset($_SESSION['customer'])) {
		unset($_SESSION["name"]);
		unset($_SESSION["phone"]);
		unset($_SESSION['customer']);
		session_destroy();
	}
	if(isset($_SESSION['vendor'])) {
		unset($_SESSION["name"]);
		unset($_SESSION["phone"]);
		unset($_SESSION['vendor']);
		session_destroy();
	}
	header('location: index.php');
}

// Adding a commodity
if(isset($_POST['addcommodity'])){
	$img = $_FILES['img']; 

	if($img['name']==''){  
		array_push($errors,"<strong>Select an Image Please.</strong>");
	}
	else {
		$filename = $img['tmp_name'];
		$client_id='67fd839d20ce847';
		$handle = fopen($filename, 'r');
		$data = fread($handle, filesize($filename));
		$pvars = array('image' => base64_encode($data));
		$timeout = 30;
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, 'https://api.imgur.com/3/image.json');
		curl_setopt($curl, CURLOPT_TIMEOUT, $timeout);
		curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Client-ID ' . $client_id));
		curl_setopt($curl, CURLOPT_POST, 1);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($curl, CURLOPT_POSTFIELDS, $pvars);

		$out = curl_exec($curl);
		curl_close ($curl);
		$pms = json_decode($out,true);
		$url=$pms['data']['link'];
		if($url!='') {
			$imgur_url = $url;
			$name = ucfirst($_POST['name']);
			$avail = $_POST['avail'];
			$price = $_POST['price'];
			$catid = $_POST['categoryid'];
			if($name =='') {
				array_push($errors,"Commodity Name cannot be empty");
			}
			if($avail == '') {
				array_push($errors,"Invalid available quantity");
			}
			if($price == '') {
				array_push($errors,"Invalid price for commodity");
			}
			if($catid == '') {
				array_push($errors,"Invalid category id for commodity");
			}

			if(count($errors)==0) {
				$res = mysqli_query($db, "INSERT into commodities(name,avail,vid,price,catid,image_url) values('$name', '$avail', '".$_SESSION['id']."', '$price', '$catid', '$imgur_url')");
				if($res) {
					array_push($success,"Success: Commodity successfully added to the stock.");
				}
				else {
					array_push($errors,"Failed: Commodity failed to add to the stock.");
				}
			}
		}
		else {
			array_push($errors,"<h2>There’s a Problem</h2><div>".$pms['data']['error']."<br/>Also, make sure you have proper internet connection.</div>");
		}
	}
}

if(isset($_POST['updatestock'])) {
	$img = $_FILES['img'];
	$imgurl = $_POST['imgurl'];

	if($img['name']!='') {
		$filename = $img['tmp_name'];
		$client_id='67fd839d20ce847';
		$handle = fopen($filename, 'r');
		$data = fread($handle, filesize($filename));
		$pvars = array('image' => base64_encode($data));
		$timeout = 30;
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, 'https://api.imgur.com/3/image.json');
		curl_setopt($curl, CURLOPT_TIMEOUT, $timeout);
		curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Client-ID ' . $client_id));
		curl_setopt($curl, CURLOPT_POST, 1);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($curl, CURLOPT_POSTFIELDS, $pvars);

		$out = curl_exec($curl);
		curl_close ($curl);
		$pms = json_decode($out,true);
		$url=$pms['data']['link'];
		if($url!='') {
			$imgurl = $url;
		}
		else {
			array_push($errors,"<h2>There’s a Problem</h2><div>".$pms['data']['error']."<br/>Also, make sure you have proper internet connection.</div>");
		}
	}

	if(count($errors)==0) {
		$id = $_POST['commodityid'];
		$name = $_POST['name'];
		$avail = $_POST['quantity'];
		$price = $_POST['price'];

		$categoryid = $_POST['categoryid'];
		if($id == "") {
			array_push($errors,"Commodity ID cannot be empty");
		}
		if($name == "") {
			array_push($errors,"Name cannot be empty");
		}
		if($avail == "") {
			array_push($errors,"Available quantity cannot be null. Delete the stock if not available");
		}
		if($price == "") {
			array_push($errors,"Price for commodity cannot be null");
		}

		$res = mysqli_query($db, "UPDATE commodities SET name='$name', avail=$avail, price=$price, catid=$categoryid, 	image_url='$imgurl' WHERE vid={$_SESSION['id']} and id=$id");
		if($res) {
			array_push($success,"Commodity successfully updated.");
		}
		else {
			array_push($errors,"Commodity failed to be updated.");
		}
	}
}
?>