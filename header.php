<!DOCTYPE html>
<html>
<head>
	<title>AgMarket - Marketing Network for Agriculure Commodities</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
	<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/icons/favicon.png"/>
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href='vendor/jquery-bar-rating/dist/themes/fontawesome-stars.css' rel='stylesheet' type='text/css'>
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/themify/themify-icons.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/elegant-font/html-css/style.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/slick/slick.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/lightbox2/css/lightbox.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/alert/jAlert-v3.min.css" />
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/main.min.css">
	<!--===============================================================================================-->
</head>

<body class="animsition">

	<!-- Header -->
	<header class="header1">
		<!-- Header desktop -->
		<div class="container-menu-header">
			<div class="topbar">
				<div class="topbar-social">
					<a href="https://fb.me/in.AgMarket" class="topbar-social-item fa fa-facebook"></a>
					<a href="https://www.instagram.com/agmarket.in" class="topbar-social-item fa fa-instagram"></a>
					<a href="https://twitter.com/AgMarket_in" class="topbar-social-item fa fa-twitter"></a>
				</div>
				<span class="topbar-child1 noselect">
					AgMarket - A Marketing Network for Agriculture Commodities
				</span>

				<div class="topbar-child2">
					<span class="topbar-email">
						help@agmarket.in
					</span>
				</div>
			</div>

			<div class="wrap_header">
				<!-- Logo -->
				<div class="logo">
					<h1 class="notranslate">
						<img src="images/icons/logo.png" alt="IMG-LOGO" />
						<span class="text-success">Ag</span><span class="text-primary">Ma</span><span class="text-danger">rk</span><span class="text-warning">et</span>
					</h1>
				</div>
				<!-- Menu -->
				<div class="wrap_menu">
					<nav class="menu">
						<ul class="main_menu">
							<?php
							$index = "index";
							$c = isset($_SESSION['customer']);
							$v = isset($_SESSION['vendor']);
							if($c) $index = "customer-index";
							if($v) $index = "vendor-index";
							?>
							<li>
								<a href="<?php echo $index; ?>.php">Home</a>
							</li>
							<?php
							if($c) {
								?>
								<li>
									<a href="product.php">Shop</a>
									<ul class="sub_menu">
										<li><a href="product.php?categoryid=1">Crops</a></li>
										<li><a href="product.php?categoryid=2">Livestock</a></li>
										<li><a href="product.php?categoryid=3">Machineries</a></li>
										<li><a href="product.php?categoryid=4">Seeds</a></li>
									</ul>
								</li>
								<?php 
							}
							else if($v) {
								?>
								<li>
									<a href="addcommodity.php">Add commodity</a>
								</li>
								<li>
									<a href="weather.php">Weather Utility</a>
								</li>
								<?php 
							}

							// Check if Android (in-app)
							if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['HTTP_X_REQUESTED_WITH'] != "in.agmarket") {
								?>
								<li>
									<a href="http://bit.ly/agmarket-in" target="_blank">Download our App</a>
								</li>
								<?php
							}
							?>
							<li>
								<a href="about.php">About us</a>
							</li>
							<?php
							if(!$c && !$v) {
								?>
								<li>
									<a href="vendor-login.php">Vendor Portal</a>
								</li>
								<li>
									<a href="customer-login.php">Customer Sign-in</a>
								</li>
								<?php
							}
							?>
						</ul>
					</nav>
				</div>
				<?php
				if( $c | $v ) {
					?>
					<!-- Header Icon -->
					<div class="header-icons">
						<div class="header-wrapicon2">
							<?php
							if($c) {
								$phone = $_SESSION["customer"];
								$name = $_SESSION["name"];
								$id = $_SESSION["id"];
								$countorders = 0;
								$countcart = 0;
								$res = mysqli_query($db, "SELECT uid,count(uid) as countcart FROM cart WHERE uid='$id' GROUP BY uid");
								if(mysqli_num_rows($res)>0) {
									$first = mysqli_fetch_assoc($res);
									$id = $first['uid'];	 		// already in session. Redundant -,- but anyway..
									$countcart = $first['countcart'];
								}
								$res = mysqli_query($db, "SELECT uid,count(uid) as countorders FROM orders WHERE uid='$id' and status not in ('done','cancelled','rejected') GROUP BY uid");
								if(mysqli_num_rows($res)>0) {
									$first = mysqli_fetch_assoc($res);
									$countorders = $first['countorders'];
								}
								$url = "customer-orders";
							}
							elseif ($v) {
								$phone = $_SESSION['vendor'];
								$name = $_SESSION["name"];
								$id = $_SESSION["id"];
								$countorders = 0;
								$res = mysqli_query($db, "SELECT v.id,count(v.id) as countorders FROM orders as o, commodities as c, vendors as v WHERE v.id = c.vid and o.comid = c.id and v.id='$id' and status not in ('done','cancelled','rejected') GROUP BY v.id");
								if(mysqli_num_rows($res)>0) {
									$first = mysqli_fetch_assoc($res);
									$countorders = $first['countorders'];		// Not Redundant for Vendor ID
								}
								$url = "vendor-orders";
							}
							?>
							<a href="userprofile.php?<?php if($c) echo "customerid=".$id; if($v) echo "vendorid=".$id; ?>">
								<img src="images/icons/icon-header-01.png" class="bg3 header-icon1" alt="ICON" />
							</a>
						</div>
						<span class="linedivide1"></span>
						<a href="<?php echo $url; ?>.php" class="header-wrapicon1 dis-block">
							<img src="images/icons/icon-header-03.png" class="header-icon1" alt="ICON">
							<span class="header-icons-noti"><?php echo $countorders; ?></span>
						</a>
						<?php
						if($c) {
							?>
							<span class="linedivide1"></span>
							<a href="cart.php" class="header-wrapicon1 dis-block">
								<img src="images/icons/icon-header-02.png" class="bg3 header-icon1" alt="ICON" />
								<span class="cartcount header-icons-noti"><?php echo $countcart; ?></span>
							</a>
							<?php
						}
						?>
						<span class="linedivide1"></span>
						<a href="server.php?logout" class="flex-c-m bg1 bo-rad-20 hov1 s-text1 trans-0-4 p-l-10 p-r-10"> Log Out</a>
					</div>
					<?php
				}
				?>
			</div>
		</div>

		<!-- Header Mobile -->
		<div class="wrap_header_mobile">
			<!-- Logo moblie -->
			<h3 class="logo-mobile header-wrapicon1 notranslate">
				<a href="index.php">
					<img src="images/icons/logo.png" alt="IMG-LOGO">
				</a>
				<span class="text-success">Ag</span><span class="text-primary">Ma</span><span class="text-danger">rk</span><span class="text-warning">et</span>
			</h3>
			<!-- Button show menu -->
			<div class="btn-show-menu">
				<?php
				if(isset($_SESSION['customer']) || isset($_SESSION['vendor'])) {
					if(isset($_SESSION['vendor']))
						$url = "cart";
					if(isset($_SESSION['vendor']))
						$url = "vendor-orders";
					?>
					<!-- Header Icon mobile -->
					<div class="header-icons-mobile">
						<div class="header-wrapicon1 dis-block">
							<a href="userprofile.php?<?php if($c) echo "customerid=".$id; if($v) echo "vendorid=".$id; ?>">
								<img src="images/icons/icon-header-01.png" class="header-icon1" alt="ICON" title="Profile" />
							</a>
						</div>
						<span class="linedivide2"></span>
						<div class="header-wrapicon2">
							<a href="<?php echo $url; ?>.php">
								<img src="images/icons/icon-header-03.png" class="header-icon1 js-show-header-dropdown" alt="ICON" title="Orders" />
								<span class="header-icons-noti"><?php echo $countorders; ?></span>
							</a>
						</div>
						<?php
						if($c) {
							?>
							<span class="linedivide2"></span>
							<div class="header-wrapicon2">
								<a href="cart.php">
									<img src="images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON" title="Cart" />
									<span class="cartcount header-icons-noti"><?php echo $countcart; ?></span>
								</a>
							</div>
							<?php
						}
						?>
					</div>
					<?php
				}
				?>
				<div class="btn-show-menu-mobile hamburger hamburger--squeeze">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</div>
			</div>
		</div>

		<!-- Menu Mobile -->
		<div class="wrap-side-menu" >
			<nav class="side-menu">
				<ul class="main-menu">
					<li class="item-menu-mobile">
						<a href="<?php echo $index; ?>.php">Home</a>
					</li>
					<?php
					if($c) {
						?>
						<li class="item-menu-mobile">
							<a href="product.php">Shop</a>
							<ul class="sub-menu">
								<li><a href="product.php?categoryid=1">Crops</a></li>
								<li><a href="product.php?categoryid=2">Livestock</a></li>
								<li><a href="product.php?categoryid=3">Machineries</a></li>
								<li><a href="product.php?categoryid=4">Plants and Seeds</a></li>
							</ul>
							<i class="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
						</li>
						<?php
					}
					else if($v) {
						?>
						<li class="item-menu-mobile">
							<a href="addcommodity.php">Add commodity</a>
						</li>
						<li class="item-menu-mobile">
							<a href="weather.php">Weather Utility</a>
						</li>
						<?php
					}
				// Check if Android (in-app)
					if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['HTTP_X_REQUESTED_WITH'] != "in.agmarket") {
						?>
						<li class="item-menu-mobile">
							<a href="http://bit.ly/agmarket-in" target="_blank">Download our App</a>
						</li>
						<?php
					}
					?>
					<li class="item-menu-mobile">
						<a href="about.php">About us</a>
					</li>
					<?php
					if(!$c && !$v) {
						?>
						<li class="item-menu-mobile">
							<a href="vendor-login.php">Vendor Portal</a>
						</li>
						<li class="item-menu-mobile">
							<a href="customer-login.php">Customer Sign-in</a>
						</li>
						<?php
					}
					else {
						?>
						<li class="item-menu-mobile">
							<a href="index.php?logout">Log Out</a>
						</li>
						<?php
					}
					?>
				</ul>
			</nav>
		</div>
	</header>