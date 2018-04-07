<?php
	$servername = "localhost";
	$username = "root";
	$password = "password123";
	$database = "agmarket";

	// Create connection
	$db = mysqli_connect($servername, $username, $password,$database);

	// Check connection
	if (!$db) {
		die("<h3 style='color:RED; text-align:center;'>Database Connection failed: " . mysqli_connect_error() . "</h3>");
	}
?>