<?php
	$servername = "localhost";
	$username = "root";
	$password = "password123";
	$database = "agmarket";

	// Create connection
	$db = mysqli_connect($servername, $username, $password,$database);

	// Check connection
	if (!$db) {
		array_push($errors, "Database Error: ".mysqli_connect_error());
	}
?>
