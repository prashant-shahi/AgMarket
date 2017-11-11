<?php
	include('server.php');
	if(empty($_SESSION['username'])&&empty($_SESSION['vendorname']))
		header('location: glasseffect.php');
	if(isset($_SESSION['vendorname']))
		header('location: index1.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>Customer Home Page</title>
	<link rel="stylesheet" type="text/css" href="./style.css?lol">
	<style type="text/css">
		body {
			background-image: url('cust.jpg');
			background-size: cover;
		}
	</style>
</head>
<body>
	<div class="header">
		<h2>Customer Home Page</h2>
	</div>

	<div class="content">

		<!-- logged in user information -->
		<?php  if (isset($_SESSION['username'])) : ?>
			<?php
				// connect to database for PLACE Session
				$db = mysqli_connect('localhost', 'root', '', 'project');
				$username = $_SESSION['username'];
				if(empty($_SESSION['place']) || !isset($_SESSION['place']))
				{
					$query = "SELECT * FROM users WHERE username='$username'";
					$results = mysqli_query($db, $query);
					$row = mysqli_fetch_array($results, MYSQLI_ASSOC);
					$_SESSION['place']=$row["place"];
				}
				else if(isset($_GET["place"]))
					$_SESSION['place']=$_GET["place"];
			?>

			<div class="error success" >
				<h3>
					Welcome <strong><?php echo $_SESSION['username']; ?>,</strong>
				</h3>
				<a href="index.php?logout='1'" style="color: red;">logout</a>

			</div>
			<hr/>			
				<form method="GET" action="searchcrop.php">
					<fieldset>
						<div class="input-group">
							<label>Location : </label>
							<select name="place">
								<?php
									$places = array("Bengaluru Urban","Bagalkot","Bellary","Chamarajanagar","Bengaluru Rural","Belgaum","Bidar","Chikkamagaluru","Chikkaballapur","Vijayapura","Kalaburagi","Dakshina Kannada","Chitradurga","Dharwad","Koppal","Hassan","Davanagere","Gadag","Raichur","Kodagu","Kolar","Haveri","Yadgir","Mandya","Ramanagara","Uttara Kannada","Mysuru","Shivamogga","Udupi","Tumakuru");
									sort($places);

									foreach ($places as  $value) {
										if($value==$_SESSION['place'])
											echo "<option value='".$value."' selected='selected'>".$value."</option>\n";
										else
											echo "<option value='".$value."'>".$value."</option>\n";
									}

								?>
							</select>
						</div>
						<legend>Search for Crop</legend>

						<div class="input-group">
							<label>Crop Name : </label>
							<select name="cropname" required="required">
								<option style="display:none"></option>
								<?php
									$crops = array("Rice", "Ragi", "Jowar","Maize","Pulses","Cocunut","Chillies","Cotton","Coffee","Sugarcane");
									sort($crops);
									foreach ($crops as  $value) {
											echo "<option value='".$value."'>".$value."</option>\n";
									}
								?>
							</select>
						</div>
						<div class="input-group">
							<label>Quantity in kg : </label>
							<input type="number" name="kg" placeholder="Optional" />
						</div>
						<div class="input-group">
							<button type="submit" class="btn">Search</button>
						</div>
					</fieldset>
				</form>
		<?php endif ?>
	</div>

		
</body>
</html>