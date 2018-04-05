<?php

session_start();

// variable declaration
$username = "";
$phonenumber = "";
$errors = array(); 
$_SESSION['success'] = "";

// connect to database
require('database.php');

if(!$db)
	array_push($errors, "Database Error".mysqli_connect_error());

// REGISTER USER
if (isset($_POST['reg_user'])) {
	// receive all input values from the form
	$username = mysqli_real_escape_string($db, $_POST['username']);
	$phonenumber = mysqli_real_escape_string($db, $_POST['phonenumber']);
	$password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
	$password_2 = mysqli_real_escape_string($db, $_POST['password_2']);
	$place = mysqli_real_escape_string($db, $_POST['place']);

	// form validation: ensure that the form is correctly filled
	if (empty($username)) { array_push($errors, "Username is required"); }
	if (empty($phonenumber)) { array_push($errors, "Phone Number is required"); }
	if (empty($password_1)) { array_push($errors, "Password is required"); }
	if(empty($place)) { array_push($errors, "Place is required"); }

	if ($password_1 != $password_2) {
		array_push($errors, "The two passwords do not match");
	}

	if (mysqli_num_rows(mysqli_query($db, "SELECT * FROM users WHERE username='$username'")) >= 1) {
		array_push($errors,"Username is available.. Choose another Username");
	}

	// register user if there are no errors in the form
	if (count($errors) == 0) {
		$password = md5($password_1);//encrypt the password before saving in the database
		$query = "INSERT INTO users (username, phonenumber, password,place) 
				  VALUES('$username', '$phonenumber', '$password','$place')";
		mysqli_query($db, $query) or die('A error occured: ' . mysql_error());;

		$_SESSION['username'] = $username;
		$_SESSION['success'] = "You are now logged in";
		header('location: index.php');
	}

}
else if (isset($_POST['login_user'])) {
	$username = mysqli_real_escape_string($db, $_POST['username']);
	$password = mysqli_real_escape_string($db, $_POST['password']);

	if (empty($username)) {
		array_push($errors, "Username is required");
	}
	if (empty($password)) {
		array_push($errors, "Password is required");
	}

	if (count($errors) == 0) {
		$password = md5($password);
		$results=mysqli_query($db, "SELECT * FROM users WHERE username='$username' AND password='$password'");

		if(mysqli_num_rows($results)>0) {
			$_SESSION['username'] = $username;
			$_SESSION['success'] = "You are now logged in";
			header('location: index.php');
		}
		else {
			array_push($errors, "Wrong username/password combination");
		}
	}
}

	//logout
			if (isset($_GET['logout'])){
				session_destroy();
				unset($_SESSION['username']);
				header('location: login.php');
			}
		mysqli_close($db);
?>
