<?php

require_once('database.php');
require_once('sms.php');
require_once('server.php');
require_once('header.php');
include('errors.php');
?>
<section class="bg9 p-b-30">
	<div class="container">
		<h3 class="bg6 text-center p-t-15 p-b-15">Vendor Login</h3>
		<div class="row p-b-200">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
			<form class="bgwhite p-b-20 p-l-20 p-t-20 col-xs-12 col-sm-12 col-md-7 col-lg-7" method="post" action="" autocomplete="off">
				<div class="form-group ml-10">
					<input class="bo9 p-t-10 p-l-10 p-r-7 p-b-7" type="phonenumber" name="phone" minlength="10" maxlength="10" required="required" placeholder="Phone Number" autocomplete="off" />
				</div>
				<div class="form-group">
					<input class="bo9 p-t-10 p-l-10 p-r-10 p-b-10" type="password" name="password" maxlength="35" required="required" placeholder="Password" autocomplete="off" />
				</div>
				<div class="w-size2">
					<button type="submit" class="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4" name="login_vendor">
						Login
					</button>
				</div>
				<p>
					Not yet a member? <a href="vendor-register.php"><strong>Sign up</strong></a>
				</p>
				<p>
					Forgot Password? <a href="iforgot.php"><strong>Forgot Password</strong></a>
				</p>
			</form>
			<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
		</div>
		<?php require_once('footer.php'); ?>
	</div>
</section>
</body>
</html>