<?php
	include('server1.php');
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
		<h2>Register New Vendor</h2>
	</div>
	
	<form method="post" action="register1.php">

		<?php include('errors.php'); ?>

		<div class="input-group">
			<label>Username</label>
			<input type="text" name="username" maxlength="25" >
		</div>
		<div class="input-group">
			<label>Phone Number</label>
			<input type="phonenumber" name="phonenumber" maxlength="10" minlength="10">
		</div>
		<div class="input-group">
			<label>Password</label>
			<input type="password" name="password_1" maxlength="35">
		</div>
		<div class="input-group">
			<label>Confirm password</label>
			<input type="password" name="password_2" maxlength="35">
		</div>
		<div class="input-group">
			<label>Place : </label>
			<select name="place">
				<option style="display:none"></option>
				<?php
					$places = array("Bengaluru Urban","Bagalkot","Bellary","Chamarajanagar","Bengaluru Rural","Belgaum","Bidar","Chikkamagaluru","Chikkaballapur","Vijayapura","Kalaburagi","Dakshina Kannada","Chitradurga","Dharwad","Koppal","Hassan","Davanagere","Gadag","Raichur","Kodagu","Kolar","Haveri","Yadgir","Mandya","Ramanagara","Uttara Kannada","Mysuru","Shivamogga","Udupi","Tumakuru");
					sort($places);

					foreach ($places as  $value)
							echo "<option value='".$value."'>".$value."</option>\n";
				?>
			</select>
		</div>
		<div class="input-group">
			<button type="submit" class="btn" name="reg_user">Register</button>
		</div>
		<p>
			Already a member? <a href="login1.php">Sign in</a>
		</p>
	</form>
</body>
</html>