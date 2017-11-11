<?php 
	include('server1.php');
	if(empty($_SESSION['username'])&&empty($_SESSION['vendorname']))
		header('location: glasseffect.php');
	if(isset($_SESSION['username']))
		header('location: index.php');
	if(isset($_GET['delete_stock']) && isset($_GET['stock_id']))
	{
		$db = mysqli_connect('localhost', 'root', '', 'project');
		$stock_id=$_GET['stock_id'];
		$query = "DELETE FROM stocks WHERE stock_id='$stock_id'";
		$results = mysqli_query($db, $query);
		header('location: '.$_SERVER['PHP_SELF']);
	}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Vendor Home Page</title>
	<link rel="stylesheet" type="text/css" href="style.css">
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
		body {
			background-image: url('ffm.jpg');
			background-size: cover;
		}
	</style>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<div class="header">
		<h2>Vendor Home Page</h2>
	</div>
	<div class="content">

				<!-- logged in user information -->
		<?php
				$vendorname = $_SESSION['vendorname'];
				if(empty($_SESSION['place']) || !isset($_SESSION['place']) || !isset($_SESSION['vendor_id']))
				{
					$query = "SELECT * FROM vendors WHERE username='$vendorname'";
					$results = mysqli_query($db, $query);
					$row = mysqli_fetch_array($results, MYSQLI_ASSOC);
					$_SESSION['place']=$row['place'];
					$_SESSION['vendor_id']=$row['vendor_id'];
				}
				else if(isset($_POST["place"]))
					$_SESSION['place']=$_POST["place"];
				
				?><div class="error success" >
				<h3>
					Welcome <strong><?php echo $_SESSION["vendorname"]; ?>,</strong>
				</h3>
				<a href="index.php?logout=\'1\'" style="color: red;">logout</a>
			</div>
			<hr/>
			<?php
				$db = mysqli_connect('localhost', 'root', '', 'project');
				if(isset($_POST['cropname']))
				{
					$cropname = mysqli_real_escape_string($db, $_POST['cropname']);
					$place = mysqli_real_escape_string($db, $_POST['place']);
					$kgavail = mysqli_real_escape_string($db, $_POST['kgavail']);
					$costpk = mysqli_real_escape_string($db, $_POST['costpk']);

					// form validation: ensure that the form is correctly filled
					if (empty($cropname)) { array_push($errors, "Cropname is required"); }
					if (empty($place)) { array_push($errors, "Place is required"); }
					if (empty($kgavail)) { array_push($errors, "KG Available is required"); }
					if (empty($costpk)) { array_push($errors, "Per kg Cost is required"); }

					if (count($errors) == 0) {
						$vendor_id=$_SESSION['vendor_id'];
						$query = "INSERT INTO stocks (vendor_id, cropname, kgavail,costpk,place) VALUES('$vendor_id','$cropname','$kgavail','$costpk','$place')";
						mysqli_query($db, $query);
					}
				}
				$vendor_id=$_SESSION['vendor_id'];

				$query="SELECT * FROM stocks WHERE vendor_id='$vendor_id'";
				$results=mysqli_query($db, $query);
				if (mysqli_num_rows($results)>=1)
				{
					echo "<br/><h4>Your Personal Stock  : </h4><br/>";
					echo "<table><tr class='tablehead'><th>Stock ID</th><th>Crop Name</th><th>KG Available</th><th>Cost(per kg)</th><th>Place</th><th>Edit</th><th>Delete</th></tr>";
					while($row = mysqli_fetch_array($results, MYSQLI_ASSOC))
					{
						$rows[] = $row;
					}
					foreach($rows as $row)
					{
						$editloc="editstock.php?stock_id=".$row['stock_id'];
						$deletestock="index1.php?delete_stock=1&stock_id=".$row['stock_id'];
						echo "<tr><td>".$row['stock_id']."</td><td>".$row['cropname']."</td><td>".$row['kgavail']."</td><td>".$row['costpk']."</td><td>".$row['place']."</td><td><button onclick=\"location.href='".$editloc."'\" style='width:100%; font-size:28px'><i class='fa fa-edit'></i></button></td><td><button onclick=\"location.href='".$deletestock."'\" style='width:100%; font-size:28px'><i class='fa fa-trash'></i></button></td></tr>";
					}
					echo "<tr><td>";
					echo "</table>";
				}
				else
				{
					echo "<br/><h4>Personal Stock Empty..</h4><br/><br/>";
				}
			?>
				<form method='POST'>
					<fieldset>
						<div class='input-group'>
							<label>Location : </label>
							<select name='place'>
								<?php
									$places = array("Bengaluru Urban","Bagalkot","Bellary","Chamarajanagar","Bengaluru Rural","Belgaum","Bidar","Chikkamagaluru","Chikkaballapur","Vijayapura","Kalaburagi","Dakshina Kannada","Chitradurga","Dharwad","Koppal","Hassan","Davanagere","Gadag","Raichur","Kodagu","Kolar","Haveri","Yadgir","Mandya","Ramanagara","Uttara Kannada","Mysuru","Shivamogga","Udupi","Tumakuru");
									sort($places);

									foreach ($places as $val) {
										if($val==$_SESSION['place'])
											echo "<option value='".$val."' selected='selected'>".$val."</option>\n";
										else
											echo "<option value='".$val."'>".$val."</option>\n";
									}
								?>
							</select>
						</div>
						<legend>Add New Stock</legend>
						<?php include('errors.php'); ?>
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
							<label>KG Available : </label>
							<input type="number" name="kgavail" placeholder="required" required="required"/>
						</div>
						<div class="input-group">
							<label>Cost per KG : </label>
							<input type="number" name="costpk" placeholder="required" required="required"/>
						</div>
						<div class="input-group">
							<button type="submit" class="btn">Add</button>
						</div>
					</fieldset>
				  </form>
	</div>
</body>
</html>