 <?php
 	include('server.php');
	if (isset($_SESSION['vendorname']))
		header('location: index1.php');
	if(isset($_SESSION['username']))
		header('location: index.php');
 ?> 
<!DOCTYPE html>
<html>
<head>
	<title>Registration system PHP and MySQL</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<style type="text/css">
		body {
			background-image: url('ffm.jpg');
			background-size: cover;
		}
	</style>
</head>

<body>
  
	<div class="header">
		<h2>Customer Login</h2>
	</div>
	
	<form method="post" action="login.php">

		<?php include('errors.php'); ?>

		<div class="input-group">
			<label>Username</label>
			<input type="text" name="username" >
		</div>
		<div class="input-group">
			<label>Password</label>
			<input type="password" name="password">
		</div>
		<div class="input-group">
			<button type="submit" class="btn" name="login_user">Login</button>
		</div>
		<p>
			Not yet a member? <a href="register.php">Sign up</a>
		</p>
	</form>

</body>
</html>