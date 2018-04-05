<?php
	$servername = "localhost";
	$username = "root";
	$password = "password123";
	$database = "cart";

	// Create connection
	$db = mysqli_connect($servername, $username, $password,$database);

	// Check connection
	if (!$db) {
		die("Database Connection failed: " . mysqli_connect_error());
}
?>