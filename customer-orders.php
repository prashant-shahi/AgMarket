<?php
require_once('database.php');
require_once('server.php');

// $res variable can be used to detect and describe error

if(!isset($_SESSION['customer']) || empty($_SESSION['customer'])) {
	header('location:index.php');
}

$uid=$_SESSION['id'];
$uname=$_SESSION['name'];
$uphone=$_SESSION['customer'];

if(isset($_POST['cartcheckout']) && !empty($_POST['cartcheckout'])) {
	$ordertype = $_POST["ordertype"];

	$res = mysqli_query($db, "SELECT v.name as vname, c.name as comname,phone,car.id,cid,quantity FROM cart as car, commodities as c, vendors as v WHERE car.cid=c.id and c.vid=v.id and uid = $uid");
	while($row = mysqli_fetch_assoc($res)) {
		$cartid[] = $row['id'];
		$comid[] = $row['cid'];
		$comname[] = $row['comname'];
		$quantity[] = $row['quantity'];
		$phone[] = $row['phone'];
		$vname[] = $row['vname'];
	}
	foreach ($comid as $key => $c) {
		$res = mysqli_query($db, "INSERT into orders(uid, comid, quantity, ordertype, status) values($uid, {$comid[$key]}, {$quantity[$key]},'$ordertype', 'not confirmed')");
		$res = mysqli_query($db, "DELETE FROM cart WHERE id={$cartid[$key]} and uid=$uid"); 
		echo "Dear {$vname[$key]}, $uname ($uphone) has ordered {$quantity[$key]} quantity of {$comname[$key]}. Contact your customer.";
		sendSms($phone[$key],"Dear {$vname[$key]}, $uname ($uphone) has ordered {$quantity[$key]} quantity of {$comname[$key]} for $ordertype. Check our website/application. -- AgMarket.in");
	}
}
if(isset($_GET['remove']) && !empty($_GET['remove'])) {
	$res = mysqli_query($db, "UPDATE orders SET status='cancelled' where id={$_GET['remove']} and uid=$uid");
	echo "Affected rows: " . mysqli_affected_rows($db);
	if(mysqli_affected_rows($db)==1) {
		header('location:customer-orders.php?remstatus=success');
	}
	else {
		header('location:customer-orders.php?remstatus=failure');
	}
}

require_once('header.php');
include('errors.php');
?>

<!-- Title Page -->
<section class="bg-title-page p-t-40 p-b-50 flex-col-c-m" style="background-image: url(images/heading-pages-01.jpg);">
	<h2 class="l-text2 t-center">
		Orders
	</h2>
</section>
<!-- Cart -->
<section class="cart bgwhite p-t-30 p-b-20">
	<div class="container">
		<?php
		mysqli_query($db,"SET @count:=0");
		$res = mysqli_query($db, "SELECT (@count:=@count+1) as sn, comid, lat,lon, o.id, com.name as comname,v.name as vname, vid, uid, price, quantity, ordertype, image_url, status from orders as o, vendors as v,commodities as com where o.comid=com.id and com.vid=v.id and uid=$uid and status not in ('cancelled','rejected','done')");
		if(!$res)
			array_push($errors,mysqli_error());

		if (mysqli_num_rows($res) <= 0) {
			?>
			<section class="cart bgwhite text-center p-t-10 p-b-70">
				<div class="container">
					<h2 class="center">No Orders !<br/><a href="index.php" alt="AgMarket Home Page" style="text-decoration: underline;">Browse and Checkout some commodities !!</a></h2>
				</div>
			</section>
			<?php
		}
		else {
			?>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<!-- Cart item -->
					<div class="container-table-cart pos-relative">
						<div class="wrap-table-shopping-cart bgwhite">
							<table class="table-shopping-cart" style="overflow: hidden;">
								<tr class="table-head">
									<th class="column-1 notranslate">S.N.</th>
									<th class="column-2" colspan="2">Commodity Name</th>
									<th class="column-3">Vendor</th>
									<th class="column-4">Order Type</th>
									<th class="column-5">Status</th>
									<th class="column-5">Rate (₹ per KG/Entity)</th>
									<th class="column-6">Quantity<br/>(KG/Entity)</th>
									<th class="column-6">Price</th>
									<th >Map</th>
									<th></th>
								</tr>
								<?php
								$lat = 0;
								$lon = 0;
								while($row = mysqli_fetch_assoc($res)) {
									$total = 0;
									?>
									<tr class="table-row">
										<td class="column-1"><?php echo $row['sn']; ?></td>
										<td>
											<a href="product-detail.php?commodityid=<?php echo $row["comid"]; ?>">
												<img src="<?php echo $row['image_url']; ?>" class="imgur-image" />
											</a>
										</td>
										<td>
											<a href="product-detail.php?commodityid=<?php echo $row["comid"]; ?>" title="Open Commodity Detail">
												<strong><?php echo $row["comname"]; ?></strong>
											</a>
										</td>
										<td class="column-3 notranslate">
											<a href="profile.php?vendorid=<?php echo $row["vid"]; ?>" title="Open Vendor Profile">	
												<strong><?php echo $row["vname"]; ?></strong>
											</a>
										</td>
										<td class="column-4">
											<?php echo ucwords($row["ordertype"]); ?>
										</td>
										<td class="column-5">
											<?php echo ucwords($row["status"]); ?>
										</td>
										<td class="column-4">
											<?php echo $row["price"]; ?>
										</td>
										<td class="column-5">
											<?php echo $row["quantity"]; ?>
										</td>
										<td class="column-6">
											<strong>
												<?php
												$total = $row["price"] * $row["quantity"];
												echo $total;
												?>
											</strong>
										</td>
										<td class="column-7">

											<div><a style="padding:0; margin:0;" href="https://www.google.com/maps/dir/?api=1&destination=<?php echo $lat.','.$lon; ?>&dir_action=navigate" target="_blank" title="Navigate in Google Maps">Navigate<span style="display:block;padding:0; margin:0;" class="notranslate">Google Maps</span></a></div>
										</td>
										<td>
											<a href="customer-orders.php?remove=<?php echo $row['id']; ?>" title="Cancel the Order">
												<i class="fa fa-trash-o" style="font-size:36px"></i>
											</a>
										</td>
									</tr>
									<?php
								}
								?>
							</table>
						</div>
					</div>
				</div>		
				<?php
			}
			?>
		</div>
		<hr/>
		<section class="cart bgwhite text-center p-t-30 p-b-10">
			<div class="container">
				<h2 class="center">List of Completed Orders</h2>
			</div>
		</section>
		<?php
		mysqli_query($db,"SET @count:=0");
		$res = mysqli_query($db, "SELECT (@count:=@count+1) as sn, comid, lat,lon, o.id, com.name as comname,v.name as vname, vid, uid, price, quantity, ordertype, image_url, status from orders as o, vendors as v,commodities as com where o.comid=com.id and com.vid=v.id and uid=$uid and status in ('cancelled','rejected','done')");
		if(!$res)
			array_push($errors,mysqli_error());

		if (mysqli_num_rows($res) <= 0) {
			?>
			<section class="cart bgwhite text-center p-t-20 p-b-20">
				<div class="container">
					<p class="center">No Completed Orders Yet !</p>
				</div>
			</section>
			<?php
		}
		else {
			?>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<!-- Cart item -->
					<div class="container-table-cart pos-relative">
						<div class="wrap-table-shopping-cart bgwhite">
							<table class="table-shopping-cart" style="overflow: hidden;">
								<tr class="table-head">
									<th class="column-1 notranslate">S.N.</th>
									<th class="column-2" colspan="2">Commodity Name</th>
									<th class="column-3">Vendor</th>
									<th class="column-4">Order Type</th>
									<th class="column-5">Status</th>
									<th class="column-6">Quantity<br/>(KG/Entity)</th>
									<th class="column-7">Price</th>
									<th>Map</th>
								</tr>
								<?php
								$lat = 0;
								$lon = 0;
								while($row = mysqli_fetch_assoc($res)) {
									$total = 0;
									?>
									<tr class="table-row">
										<td class="column-1"><?php echo $row['sn']; ?></td>
										<td>
											<a href="product-detail.php?commodityid=<?php echo $row["comid"]; ?>">
												<img src="<?php echo $row['image_url']; ?>" class="imgur-image" />
											</a>
										</td>
										<td>
											<a href="product-detail.php?commodityid=<?php echo $row["comid"]; ?>" title="Open Commodity Detail">
												<strong><?php echo ucwords($row["comname"]); ?></strong>
											</a>
										</td>
										<td class="column-3 notranslate">
											<a href="profile.php?vendorid=<?php echo $row["vid"]; ?>" title="Open Vendor Profile">	
												<strong><?php echo ucwords($row["vname"]); ?></strong>
											</a>
										</td>
										<td class="column-4">
											<?php echo ucwords($row["ordertype"]); ?>
										</td>
										<td class="column-5">
											<?php echo ucwords($row["status"]); ?>
										</td>
										<td class="column-5">
											<?php echo $row["quantity"]; ?>
										</td>
										<td class="column-6">
											<strong>
												<?php
												$total = $row["price"] * $row["quantity"];
												echo $total;
												?>
											</strong>
										</td>
										<td class="column-7">
											<div><a style="padding:0; margin:0;" href="https://www.google.com/maps/dir/?api=1&destination=<?php echo $lat.','.$lon; ?>&dir_action=navigate" target="_blank" title="Open Google Maps">Navigate<span style="display:block;padding:0; margin:0;" class="notranslate">Google Maps</span></a></div>
										</td>
									</tr>
									<?php
								}
								?>
							</table>
						</div>
					</div>
				</div>		
				<?php
			}
			?>
		</div>
	</div>
</section>
<hr/>
<section class="cart bgwhite p-b-10">
	<div class="container">
		<h4>Status Note:</h4>
		<div> Rejected <span> - Rejected by the Vendor</span></div>
		<div> Cancelled <span> - Cancelled by the Customer</span></div>
		<div> Not Confirmed <span> - Yet to be approved by Vendor</span></div>
		<div> Done <span> - Order is successfully received by Customer</span></div>
	</div>
</section>
<?php require_once('footer.php'); ?>
</body>
</html>