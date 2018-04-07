<?php
	session_start();

 	if (isset($_SESSION['vendor']))
 		header('location: vendor-index.php');
	if(isset($_SESSION['customer']))
		header('location: index.php');
?>