<?php 
	include('server1.php');
	if(empty($_SESSION['username'])&&empty($_SESSION['vendorname']))
		header('location: glasseffect.php');
	if(isset($_SESSION['username']))
		header('location: index.php');
	$cropname="";
	$kgavail="";
	$stock_id="";
	$costpk="";
	$place="";
?>
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
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
	</style>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<div class="header">
		<h2>Vendor Modify Stock Page</h2>
	</div>
	<div class="content">

				<!-- logged in user information -->
		<?php
			$vendorname = $_SESSION['vendorname'];
			if(empty($_SESSION['place']) || !isset($_SESSION['place']) )
			{
				$query = "SELECT * FROM vendors WHERE username='$vendorname'";
				$results = mysqli_query($db, $query);
				$row = mysqli_fetch_array($results, MYSQLI_ASSOC);
				$_SESSION['place']=$row['place'];
				$_SESSION['vendor_id']=$row['vendor_id'];
			}
			else if(isset($_POST["place"])) 
			{
				$_SESSION['place']=$_POST["place"];
			}
			
		?>
		<div class="error success" >
		<h3>
			Welcome <strong><?php echo $_SESSION["vendorname"]; ?>,</strong>
			</h3>
			<a href="index.php?logout=\'1\'" style="color: red;">logout</a>
		</div>
		<hr/>
		<?php if(!isset($_POST['stock_id']) || isset($_GET['stock_id'])) : 
				$db = mysqli_connect('localhost', 'root', '', 'project');
				$stock_id = mysqli_real_escape_string($db, $_GET['stock_id']);
				$results=mysqli_query($db, "SELECT * FROM stocks WHERE stock_id='$stock_id'");
				?>
				<?php if(mysqli_num_rows($results)==1) :
					$row=mysqli_fetch_array($results, MYSQLI_ASSOC);
					$GLOBALS['cropname']=$row["cropname"];
					$GLOBALS['kgavail']=$row["kgavail"];
					$GLOBALS['stock_id']=$row["stock_id"];
					$GLOBALS['costpk']=$row["costpk"];
					$GLOBALS['place']=$row["place"];
				?>
				<form method="POST" action="editstockaction.php">
					<fieldset>
						<legend>Modify the below Stock :</legend>
						<?php include('errors.php'); ?>
						<div class="input-group">
						<input type="hidden" name="stock_id" value="<?php echo $stock_id ?>"/>
						<div class='input-group'>
							<label>Location : </label>
							<select name='place'>
							<?php
								$places = array("Bengaluru Urban","Bagalkot","Bellary","Chamarajanagar","Bengaluru Rural","Belgaum","Bidar","Chikkamagaluru","Chikkaballapur","Vijayapura","Kalaburagi","Dakshina Kannada","Chitradurga","Dharwad","Koppal","Hassan","Davanagere","Gadag","Raichur","Kodagu","Kolar","Haveri","Yadgir","Mandya","Ramanagara","Uttara Kannada","Mysuru","Shivamogga","Udupi","Tumakuru");
								sort($places);

								foreach ($places as $val) {
									if($val==$GLOBALS['place'])
									{
										echo "<option value='".$val."' selected='selected'>".$val."</option>\n";
									}
									else
									{
										echo "<option value='".$val."'>".$val."</option>\n";
									}
								}
							?>
							</select>
						</div>
						<div class="input-group">
						<label>Crop Name : </label>
						<select name="cropname" required="required">
							<option style="display:none"></option>
							<?php
								$crops = array("Rice", "Ragi", "Jowar","Maize","Pulses","Cocunut","Chillies","Cotton","Coffee","Sugarcane");
								sort($crops);
								foreach ($crops as  $value) {
									if($value==$GLOBALS['cropname'])
									{	
										echo "<option value='".$value."' selected='selected'>".$value."</option>\n";
									}
									else
									{
										echo "<option value='".$value."'>".$value."</option>\n";
									}
								}
							?>
						</select>
					</div>
					<div class="input-group">
						<label>KG Available : </label>
						<input type="number" name="kgavail" value="<?php echo $GLOBALS['kgavail'] ?>" required="required"/>
					</div>
					<div class="input-group">
						<label>Cost per KG : </label>
						<input type="number" name="costpk" value="<?php echo $GLOBALS['costpk'] ?>" required="required"/>
					</div>
					<div class="input-group">
						<input type="submit" class="btn" value="Update" />
					</div>
				</fieldset>
			  </form>
			<?php else :
				echo "<br/><br/><h4>Error Occured, Stock not found.. Go Back and Try again..</h4><br/>";
			?>
		<?php endif; ?>
		<?php endif; ?>
</div>
</body>
</html>