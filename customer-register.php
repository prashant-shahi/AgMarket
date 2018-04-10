<?php
include('session-redirect.php');
require('database.php');
//include('server.php');
require('header.php');
include('errors.php');
?>

<section class="bg9 p-b-30">
	<div class="container">
		<h3 class="bg6 text-center p-t-15 p-b-15">Register New Customer</h3>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
		<form class="bgwhite p-b-20 p-l-20 p-t-20 col-xs-12 col-sm-12 col-md-8 col-lg-8" method="post" action="" autocomplete="off">
			<div class="form-group ml-10">
				<input class="bo9 p-t-10 p-l-10 p-r-8 p-b-8" type="text" name="username" maxlength="25" required="required" placeholder="Username" autocomplete="off" />
			</div>
			<div class="form-group">
				<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="password" name="password_1" maxlength="35" required="required" placeholder="Password" autocomplete="off" />
			</div>
			<div class="form-group">
				<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="password" name="password_2" maxlength="35" required="required" placeholder="Confirm Password" autocomplete="off" />
			</div>
			<div>
				<select name="place" class="bo9 p-t-10 p-l-10 p-r-10 p-b-10">
					<option selected="true" disabled="disabled"  value="">Your Place</option>
					<?php
					$places = array("Bengaluru Urban","Bagalkot","Bellary","Chamarajanagar","Bengaluru Rural","Belgaum","Bidar","Chikkamagaluru","Chikkaballapur","Vijayapura","Kalaburagi","Dakshina Kannada","Chitradurga","Dharwad","Koppal","Hassan","Davanagere","Gadag","Raichur","Kodagu","Kolar","Haveri","Yadgir","Mandya","Ramanagara","Uttara Kannada","Mysuru","Shivamogga","Udupi","Tumakuru");
					sort($places);

					foreach ($places as $value)
						echo "<option value='".$value."'>".$value."</option>\n";
					?>
				</select>
			</div>
			<div class="form-group p-t-10">
				<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="phonenumber" name="phonenumber" maxlength="10" minlength="10" required="required" placeholder="Phone Number" autocomplete="off" />
			</div>
			<div class="form-group">
				<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="email" name="email" placeholder="Email" autocomplete="off" />
			</div>
			<div class="w-size2">
				<button type="submit" name="reg_customer" class="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
					Register
				</button>
			</div>
			<p>
				Already a member? <a href="customer-login.php">Sign in</a>
			</p>
		</form>
		<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
	</div>
		<?php require('footer.php'); ?>
	</div>
</section>
</body>
</html>