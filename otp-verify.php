<?php

require_once 'database.php';
require_once 'server.php';
require_once 'sms.php';

$countstatus = 0;

if((isset($_SESSION['customer']) && !empty($_SESSION['customer'])) || (isset($_SESSION['vendor']) && !empty($_SESSION['vendor']))) {
	header('location:index.php');
	die();
}

if($_GET['u']=='c') {
	$u = $_GET['u'];
	$utable = "customers";
}
else if($_GET['u']=='v') {
	$u = $_GET['u'];
	$utable = "vendors";
}
else {
	array_push($errors, "Error Occurred while fetching user type.");
}

if(isset($_SESSION['phone']) && !empty($_SESSION['phone'])) {
	$phone  = $_SESSION['phone'];
}
else if(isset($_GET['p']) && !empty($_GET['p'])) {
	$phone = $_GET['p'];
}
else  {
	array_push($errors, "Error while fetching phone number.");
}

$query = "SELECT verify from $utable WHERE phone=$phone";
$res = mysqli_query($db,$query);
if(!$res) {
	array_push($errors,mysqli_error($db));
}
if(mysqli_num_rows($res)!=1) {
	array_push($errors, "Error occured while fetching verified data.");
}
$first = mysqli_fetch_array($res);
if($first['verify']==1) {
	header('location:index.php?status=alreadyverified');
	exit();
}
$errorcount = count($errors);

if(count($errors)==0) {
	if(isset($_POST['otp-verify']) || isset($_GET['otp'])) {
		if(isset($_POST['otp-verify'])) {
			$phone = $_POST['phone'];
			$u = $_POST['u'];
			$utable = $_POST['utable'];
			$otp = $_POST['otp'];
		}
		else if(isset($_GET['otp'])) {
			$otp = $_GET['otp'];
		}
		$response = verifyOtp($phone, $otp);
		$response = json_decode($response,true);

		if($response['type']=="error") {
			if(isset($response['message'])) {
				if($response['message']=="already_verified" || $response['message']=="no_request_found") {
					sendOtp($phone,$u);
					array_push($success,"New OTP was sent to your phone number.");
				}
				else if($response['message']=="otp_not_verified") {
					array_push($errors,"Incorrect OTP. <a href='otp-verify.php?u=$u&p=$phone'>Try Again</a>");
				}
				else
					array_push($errors,$response['message']);
			}
			else
				array_push($errors,"Error occured while verying otp.");
		}
		else {
			$res = mysqli_query($db,"UPDATE $utable set verify=1 WHERE verify=0 and phone=$phone");
			if(!$res)
				array_push($errors,mysqli_error($db));
			header('location:index.php?status=verified');
		}
	}
	else if(isset($_GET['resend']) && !empty($_GET['resend'])) {
		if($_GET['resend']!=1)
			array_push($errors, "Error while verifying");
		else {
			if($_GET['rt']=="voice") {
				$response = resendOtp($phone,"voice");
			}
			else {
				$response = resendOtp($phone,"text");
			}
			$response = json_decode($response,true);

			if($response['type']=="error") {
				if(isset($response['message'])) {
					if($response['message']=="already_verified" || $response['message']=="no_request_found") {
						sendOtp($phone,$u);
						array_push($success,"New OTP was sent to your phone number.");
					}
					else
						array_push($errors,$response['message']);
				}
				else
					array_push($errors,"Error occured while verying otp.");
			}
			else {
				array_push($success,"OTP successfully sent to your phone number.");
			}
		}
	}
}
$errorcount = count($errors);

require_once('header.php'); 
require_once('errors.php');


if($errorcount!=0) {
	?>
	<section class="bg9 p-b-30">
		<div class="container">
			<h3 class="bg6 text-center p-t-15 p-b-15">Error occured while processing your request.</h3>
			<p class="text-center"><a href="index.php">Click here</a>, to go to Home Page</p>
		</div>
	</section>
	<?php
}
else {
	?>
	<section class="bg9 p-b-30">
		<div class="container">
			<h3 class="bg6 text-center p-t-15 p-b-15">OTP Verify</h3>
			<div class="row p-b-200">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
				<form class="bgwhite p-b-20 p-l-20 p-t-20 col-xs-12 col-sm-12 col-md-7 col-lg-7" method="post" action="otp-verify.php" autocomplete="off">
					<p>Your Number: <?php echo $phone; ?></p>
					<input type="number" name="phone" autocomplete="off" value="<?php echo $phone; ?>" hidden />
					<input type="text" name="u" autocomplete="off" value="<?php echo $u; ?>" hidden />
					<div class="form-group ml-10">
						<input class="bo9 p-t-10 p-l-10 p-r-7 p-b-7" type="number" name="otp" minlength="7" maxlength="7" required="required" placeholder="OTP" autocomplete="off" />
					</div>
					<input type="text" name="utable" hidden="hidden" value="<?php echo $utable; ?>" />
					<div class="w-size2">
						<button type="submit" class="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4" name="otp-verify">
							Verify
						</button>
					</div>
					<p>
						Didn't receive even after a minute?<br/>
						<a href="otp-verify.php?u=<?php echo "$u&p=$phone"; ?>&resend=1&rt=text"><strong>Resend SMS</strong></a>
						<!--
							&nbsp;&nbsp;&nbsp;&nbsp;<a href="otp-verify.php?u=<?php //echo "$u&p=$phone"; ?>&resend=1&rt=voice"><strong>Voice Call</strong></a>
						-->
					</p>
				</form>
				<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
			</div>
		</div>
	</section>
	<?php
}
?>
<?php require_once('footer.php'); ?>
</body>
</html>