<?php
	include('server.php');
	if(empty($_SESSION['username']))
		header('location: glasseffect.php');
	if(isset($_SESSION['vendorname']))
		header('location: index1.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>Results from Search Crop</title>
	<link rel="stylesheet" type="text/css" href="./style.css">
	<style type="text/css">
		table {
		    border-collapse: collapse; /* Collapse borders */
		    width: 100%; /* Full-width */
		    border: 1px solid #ddd; /* Add a grey border */
		    font-size: 18px; /* Increase font-size */
		}

		table th{
		    background-color: #4CAF50;
		    color: white;
		    padding: 12px; /* Add padding */
		}

		table tr {
		    /* Add a bottom border to all table rows */
		    text-align: center; /* Left-align text */
		    border-bottom: 1px solid #ddd; 
		}

		
		table tr td:hover {
			background-color: #00f100;
		}

		table tr:nth-child(even) {
				background-color: #c0c0c0;
			}
		h3 a {
			text-decoration:none;
			color:#4848ff;
		}
		h3 a:hover {
			text-decoration:none;
			color:white;
			background-color: lightblue;
		}
	</style>
</head>
<body>
	<div class="header">
		<h2>Search Crop Results</h2>
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
			<?php
					if(isset($_GET['cropname']))
					{
						$db = mysqli_connect('localhost', 'root', '', 'project');
						$cropname = mysqli_real_escape_string($db, $_GET['cropname']);
						$place = mysqli_real_escape_string($db, $_GET['place']);
						$kg = mysqli_real_escape_string($db, $_GET['kg']);

						$query = "SELECT * FROM stocks as s,vendors as v WHERE s.vendor_id=v.vendor_id AND cropname='$cropname' AND s.place='$place'";
						if($kg!="")
							$query.=" AND kgavail>='$kg'";
						$results=mysqli_query($db, $query);
						if (mysqli_num_rows($results)>=1) {
								echo "<br/><h4>Search Results for \"".$cropname."\" at location \"".$place."\" : </h4><br/>";
								echo "<table><tr class='tablehead'><th>Vendor ID</th><th>Vendor Name</th><th>KG Available</th><th>Cost per KG</th><th>Phone Number</th></tr>";
								while($row = mysqli_fetch_array($results, MYSQLI_ASSOC))
								{
									$rows[] = $row;
								}
								foreach($rows as $row)
								{
									echo "<tr><td>".$row['vendor_id']."</td><td>".$row['username']."</td><td>".$row['kgavail']."</td><td>".$row['costpk']."</td><td>".$row['phonenumber']."</td></tr>";
								}
								echo "</table>";
							}
							else
								echo "<br/><h4>No Results Found</h4><br/>";
							echo "<br/><br/><h3><a href='index.php'>Go Back</a></h3><br/>";
					}
					else
						header('location:index.php');
			?>
		<?php else :
				header('location:glasseffect.php'); ?>
		<?php endif ?>
	</div>
</body>
</html>