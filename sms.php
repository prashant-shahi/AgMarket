<?php
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

function sendOtp($number,$user,$x = '') {

	$authKey = "214511AjSNk4gz5zj5af2336e";
	$message = "Your verification code is ##OTP##.\r\n OR go to www.AgMarket.in/otp-verify.php?u=".$user."&p=".$number."&otp=##OTP##.\r\nIt will be valid for 24 hours.";

	if(isset($x) && !empty($x)) {
		if($x == "forgot") {
			$message = "Your verification code is ##OTP##.\r\n OR go to www.AgMarket.in/iforgot.php?u=".$user."&p=".$number."&otp=##OTP##.\r\nIt will be valid for 24 hours.";
		}
	}

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
			CURLOPT_URL => "http://control.msg91.com/api/sendotp.php?otp_length=7&authkey=".$authKey."&message=".urlencode($message)."&sender=AgMrkt&mobile=".$number,
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
		CURLOPT_URL => "https://control.msg91.com/api/verifyRequestOTP.php?authkey=".$authKey."&mobile=".$number."&otp=".$otp,
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
?>