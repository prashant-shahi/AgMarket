<?php

require_once('database.php');
require_once('server.php');
require_once('sms.php');

if((isset($_SESSION['customer']) && !empty($_SESSION['customer'])) || (isset($_SESSION['vendor']) && !empty($_SESSION['vendor'])))
	header('location:index.php');

if(isset($_POST['changepassword'])) {
	$profile = mysqli_real_escape_string($db, $_POST['profile']);
	$phone = mysqli_real_escape_string($db, $_POST['phone']);
	$password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
	$password_2 = mysqli_real_escape_string($db, $_POST['password_2']);

	// form validation: ensure that the form is correctly filled
	if (empty($password_2)) { array_push($errors, "Confirm Password is required"); }
	if (empty($password_1)) { array_push($errors, "New Password is required"); }
	if ($password_1 != $password_2) {
		array_push($errors, "The two passwords do not match");
	}

// change password if two passwords matched
	if (count($errors) == 0) {
		$password = $password_1;
		$randstr = getRandomString();
		$salt = sha1(md5($password)).$randstr;
		$password = md5($password.$salt);
		$res = mysqli_query($db, "UPDATE ".$profile."s set saltstring='$randstr', password='$password' WHERE phone=$phone");
		if(!$res)
			array_push($errors,mysqli_error($db));
		if(mysqli_affected_rows($db)>=1){
			array_push($success,"User password successfully changed");
			header('location: index.php?status=passwordchanged');
			exit();
		}
		else
			array_push($errors,"Failed to change user password");
	}
}
else if(isset($_GET['otp']) || isset($_POST['otp-entered'])) {
	if(isset($_POST['otp'])) {
		$profile = $_POST['profile'];
		$phone = $_POST['phone'];
		$otp = $_POST['otp'];
	}
	else if(isset($_GET['u']) && isset($_GET['p']) && isset($_GET['otp'])) {
		$u=$_GET['u'];
		if($u=='c')
			$profile = "customer";
		else if($u=='v')
			$profile = "vendor";
		$phone = $_GET['p'];
		$otp = $_GET['otp'];
	}
	else
		array_push($errors,"Not sufficient datas for verification");

	$changepermission = "approved";
	if(count($errors)==0) {
		$response = verifyOtp($phone, $otp);
		$response = json_decode($response,true);

		if($response['type']=="error") {
			array_push($errors,"Error Occuered while verifying otp.");
			if(isset($response['message'])) {
				if($response['message']=="otp_not_verified" || $response['message']=="invalid_otp") {
					array_push($errors,"Incorrect OTP. <a href='iforgot.php?u=$u&p=$phone'>Try Again</a>");
				}
				else if($response['message']=="already_verified") {
					array_push($errors,"OTP has been already used and expired. Go Back and request for new one again.");
				}
				else {
					array_push($errors,$response['message']);
				}
			}
		}
		else {
			array_push($success,"OTP has been successfully approved. You can change password now.");
			$changepermission = "approved";
		}
	}
}
else if(isset($_POST['otp-verify'])) {
	if(isset($_POST['otp-verify'])) {
		$phone = mysqli_real_escape_string($db, $_POST['phone']);
		$profile = mysqli_real_escape_string($db, $_POST['profile']);
		if($profile == "vendor")
			$u = "v";
		else if ($profile == "customer")
			$u = "c";
	}
	else
		array_push($errors,"Not sufficient datas for sending otp.");


	if(count($errors)==0) {
		$response = sendOtp($phone, $u, "forgot");
		$response = json_decode($response, true);

		if($response['type']=="error") {
			array_push($errors,"Error occured while sending otp.");
			if(isset($response['message'])){
				array_push($errors,$response['message']);
			}
		}
		else{
			array_push($success,"OTP has been successfully processed to your number.");
		}
	}
}
else if(isset($_GET['u']) && isset($_GET['p'])) {
	$u = $_GET['u'];
	$phone = $_GET['p'];
	if($u=='c')
		$profile = "customer";
	else if($u=='v')
		$profile = "vendor";
}

$counterrors = count($errors);

require_once('header.php'); 
require_once('errors.php'); 

if($counterrors!=0) {
	?>
	<h2 class="text-center p-t-45 p-b-15">Error</h2>
	<p class="bg6 text-center p-t-35 p-b-15">Some error occurred while processing your request. Please try again.</p>
	<?php
}
else if(isset($changepermission) && $changepermission=="approved") {
	?>
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
		<form class="bgwhite p-b-20 p-l-20 p-t-20 col-xs-12 col-sm-12 col-md-8 col-lg-8" method="POST" action="iforgot.php" autocomplete="off">
			<h1 class="text-center">Forgot Password</h1>
			<h3 class="bg6 text-center p-t-35 p-b-15">Change your password</h3>
			<input  type="phonenumber" name="phone" minlength="10" maxlength="10" hidden="hidden" value="<?php echo $phone; ?>" />
			<input  type="text" name="profile"  hidden="hidden" value="<?php echo $profile; ?>" />
			<div class="form-group">
				New Password:
				<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="password" name="password_1" minlength="5" maxlength="35" required="required" placeholder="New Password" autocomplete="off" />
			</div>
			<div class="form-group">
				Confirm Password:
				<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="password" name="password_2" minlength="5" maxlength="35" required="required" placeholder="Confirm Password" autocomplete="off" />
				<span class="text-danger" id="passworderror"></span>
			</div>
			<div class="form-group">
				<button type="submit" name="changepassword" class="t-center w-size2 flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
					Change Password
				</button>
			</div>
		</form>
		<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
	</div>
	<?php
}
else if(isset($_POST['otp-verify']) || (isset($_GET['u']) && isset($_GET['p']))) {
	?>
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
		<form class="bgwhite p-b-20 p-l-20 p-t-20 col-xs-12 col-sm-12 col-md-8 col-lg-8" method="POST" action="iforgot.php" autocomplete="off">
			<h1 class="text-center">Forgot Password</h1>
			<h3 class="bg6 text-center p-t-35 p-b-15">OTP Verify</h3>
			<p>Your Number: <?php echo $phone; ?></p>
			<input  type="phonenumber" name="phone" minlength="10" maxlength="10" hidden="hidden" value="<?php echo $phone; ?>" />
			<input  type="text" name="u"  hidden="hidden" value="<?php echo $u; ?>" />
			<input  type="text" name="profile"  hidden="hidden" value="<?php echo $profile; ?>" />
			<div class="form-group">
				OTP:
				<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="number" name="otp" minlength="7" maxlength="7" required="required" placeholder="Received OTP" autocomplete="off" />
			</div>
			<div class="form-group">
				<button type="submit" name="otp-entered" class="t-center w-size2 flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
					Verify
				</button>
			</div>
		</form>
		<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
	</div>
	<?php
}
else {
	?>
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
		<form class="bgwhite p-b-20 p-l-20 p-t-20 col-xs-12 col-sm-12 col-md-8 col-lg-8" method="POST" action="iforgot.php" autocomplete="off">
			<h1 class="text-center">Forgot Password</h1>
			<h3 class="bg6 text-center p-t-35 p-b-15">Claim your account</h3>
			<div class="form-group">
				Phone Number:
				<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="phonenumber" name="phone" minlength="10" maxlength="10" required="required" placeholder="Phone Number" autocomplete="off" />
			</div>
			<div class="form-group bo9 p-t-10 p-l-10 p-r-10 p-b-10 " style="width:300px;">
				<select name="profile" class="selection-2">
					<option selected="true" disabled="disabled"  value="">Select Your Profile</option>
					<option value="customer">Customer</option>
					<option value="vendor">Vendor</option>
				</select>
			</div>
			<div class="form-group">
				<button type="submit" name="otp-verify" class="t-center w-size2 flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
					Reset Password
				</button>
			</div>
			<p>
				<a href="index.php">Go Back to <strong>Homepage</strong></a>
			</p>
		</form>
		<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
	</div>
	<?php
}
?>

<?php require_once('footer.php'); ?>
<!-- Container Selection -->
<div id="dropDownSelect1"></div>
<div id="dropDownSelect2"></div>

<script type="text/javascript">
	$(".selection-1").select2({
		minimumResultsForSearch: 20,
		dropdownParent: $('#dropDownSelect1')
	});

	$(".selection-2").select2({
		minimumResultsForSearch: 20,
		dropdownParent: $('#dropDownSelect2')
	});
</script>
</body>
</html>