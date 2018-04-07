<?php
	include('session-redirect.php');
	require('database.php');
	require('header.php');
?>
	
	<form method="post" action="">
		<h3 class="center">Register New Customer</h3>

		<div class="input-group">
			<label>Username</label>
			<input type="text" name="username" maxlength="25" required="required" />
		</div>
		<div class="input-group">
			<label>Phone Number</label>
			<input type="phonenumber" name="phonenumber" maxlength="10" minlength="10" required="required" />
		</div>
		<div class="input-group">
			<label>Email</label>
			<input type="email" name="email"/>
		</div>
		<div class="input-group">
			<label>Password</label>
			<input type="password" name="password_1" maxlength="35" required="required" />
		</div>
		<div class="input-group">
			<label>Confirm password</label>
			<input type="password" name="password_2" maxlength="35" required="required" />
		</div>
		<div class="input-group">
			<label>Place : </label>
			<select name="place">
				<option style="display:none;"></option>
				<?php
					$places = array("Bengaluru Urban","Bagalkot","Bellary","Chamarajanagar","Bengaluru Rural","Belgaum","Bidar","Chikkamagaluru","Chikkaballapur","Vijayapura","Kalaburagi","Dakshina Kannada","Chitradurga","Dharwad","Koppal","Hassan","Davanagere","Gadag","Raichur","Kodagu","Kolar","Haveri","Yadgir","Mandya","Ramanagara","Uttara Kannada","Mysuru","Shivamogga","Udupi","Tumakuru");
					sort($places);

					foreach ($places as $value)
							echo "<option value='".$value."'>".$value."</option>\n";
				?>
			</select>
		</div>
		<div class="input-group">
			<button type="submit" class="btn" name="reg_user">Register</button>
		</div>
		<p>
			Already a member? <a href="login.php">Sign in</a>
		</p>
	</form>
</body>
</html>