<?php

require_once('database.php');
require_once('server.php');

if(isset($_SESSION['customer']) && !empty($_SESSION['customer']))
	header('location:customer-index.php');
if(isset($_SESSION['vendor']) && !empty($_SESSION['vendor']))
	header('location:vendor-index.php');

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

require_once('header.php'); 
require_once('errors.php'); 

?>
<!--
<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
	<form class="bgwhite p-b-20 p-l-20 p-t-20 col-xs-12 col-sm-12 col-md-8 col-lg-8" method="POST" action="" autocomplete="off">
		<h1>UNDER CONSTRUCTION !!</h1>
		<h3 class="bg6 text-center p-t-35 p-b-15">Change Password</h3>
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
-->
<?php
}
require_once('footer.php');
?>
</body>
</html>