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
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<?php require('header.php'); ?>
	
	<form method="post" action="login.php">
		<h3 class="center">Customer Login</h3>

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