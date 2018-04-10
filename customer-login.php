<?php
require("session-redirect.php");
require('database.php');
require('header.php');
?>	
<form method="POST" action="">
	<h3 class="center">Customer Login</h3>

	<div class="input-group">
		<label>Username</label>
		<input type="text" name="username" >
	</div>
	<div class="input-group">
		<label>Password</label>
		<input type="password" name="password">
	</div>
	<div class="input-group">
		<button type="submit" class="btn" name="login_customer">Login</button>
	</div>
	<p>
		Not yet a member? <a href="customer-register.php">Sign up</a>
	</p>
</form>

<?php require("footer.php"); ?>
</body>
</html>