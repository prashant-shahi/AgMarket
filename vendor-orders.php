<?php
require_once('database.php');
require_once('server.php');
require_once('session-redirect.php');

// UPDATE orders SET status='not confirmed' where id=8 and comid in (SELECT id from commodities where vid=8);

if(isset($_GET['approve']) && !empty($_GET['approve'])) {
	$res = mysqli_query($db, "UPDATE orders SET status='confirmed' where id={$_GET['approve']} and comid in (SELECT id from commodities where vid={$_SESSION['id']})");
	if(mysqli_affected_rows($db)==1) {
		array_push($success,"Successfully approved the order");
	}
	else {
		array_push($errors,"Failed to approve the order with id {$_GET['approve']}");
	}
}
if(isset($_GET['delivered']) && !empty($_GET['delivered'])) {
	$res = mysqli_query($db, "UPDATE orders SET status='done' where id={$_GET['delivered']} and comid in (SELECT id from commodities where vid={$_SESSION['id']})");
	if(mysqli_affected_rows($db)==1) {
		array_push($success,"Successfully delivered the order");
	}
	else {
		array_push($errors,"Failed to mark as delivered the order with id {$_GET['delivered']}");
	}
}
if(isset($_GET['reject']) && !empty($_GET['reject'])) {
	$res = mysqli_query($db, "UPDATE orders SET status='rejected' where id={$_GET['reject']} and comid in (SELECT id from commodities where vid={$_SESSION['id']})");
	if(mysqli_affected_rows($db)==1) {
		array_push($success,"Successfully rejected the order");
	}
	else {
		array_push($errors,"Failed to reject the order with id {$_GET['reject']}");
	}
}

require('header.php'); 
include('errors.php');
?>

<?php
mysqli_query($db,"SET @count:=0");
$res = mysqli_query($db, "SELECT (@count:=@count+1) AS sn, o.id, comid, c.name as comname, image_url, cus.name as cusname,quantity, ordertype, status, ts, cus.lat, cus.lon FROM orders as o, commodities as c, customers as cus, vendors as v WHERE v.id = c.vid and o.comid = c.id and cus.id=o.uid and v.id=".$_SESSION['id']." and status not in ('done','rejected','cancelled')");
if(!$res) {
	array_push($err, mysqli_error($db));
}
?>

<!-- Title Page -->
<section class="bg-title-page p-t-40 p-b-50 flex-col-c-m" style="background-image: url(images/heading-pages-01.jpg);">
	<h2 class="l-text2 t-center">
		Orders
	</h2>
</section>

<?php
if(mysqli_num_rows($res) <= 0) {
	?>
	<section class="bgwhite text-center p-t-30 p-b-30">
		<div class="container">
			<h3 class="center">No Order for now !!</h3>
			<br/><p><a href="addcommodity.php">Add more commodities</a> to reach more customers.</p>
		</div>
	</section>
	<?php
}
else {
	?>
	<section class="cart bgwhite p-t-40">
		<div class="container">
			<div class="row">
				<!-- Cart item -->
				<div class="container-table-cart pos-relative col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div class="wrap-table-shopping-cart bgwhite">
						<table class="table-shopping-cart" style="overflow: hidden;">
							<tr class="table-head">
								<th class="column-1 notranslate">S.N.</th>
								<th class="column-2" colspan="2">Commodity</th>
								<th class="column-3">Customer</th>
								<th class="column-4">Quantity</th>
								<th class="column-5">Order Type</th>
								<th class="column-6">Status</th>
								<th class="column-7">Time Stamp</th>
								<th>Map</th>
								<th></th>
								<th></th>
							</tr>
							<?php
							while($row = mysqli_fetch_assoc($res)) {
								?>
								<tr class="table-row">
									<td class="column-1"><?php echo $row['sn']; ?></td>
									<td>
										<img src="<?php echo $row['image_url']; ?>" class="imgur-image" />
									</td>
									<td>
										<a href="product-detail.php?id=<?php echo $row["comid"]; ?>"><?php echo ucwords($row["comname"]); ?></a>
									</td>
									<td class="column-3"><?php echo $row["cusname"]; ?></td>
									<td class="column-4"><?php echo $row["quantity"]; ?></td>
									<td class="column-5">
										<?php echo ucwords($row["ordertype"]); ?>
									</td>
									<td class="column-6">
										<?php echo ucwords($row["status"]); ?>
									</td>
									<td class="column-7">
										<?php echo $row["ts"]; ?>
									</td>
									<td>
										<a style="padding:0; margin:0; display:block;" href="https://www.google.com/maps/dir/?api=1&destination=<?php echo $row['lat'].','.$row['lon']; ?>&dir_action=navigate" target="_blank">Navigate <span style="padding:0; margin:0; display:block;" class="notranslate">Google Maps</span></a>
									</td>
									<td>
										<?php
										if($row["status"] === "not confirmed") {
											?>
											<a href="vendor-orders.php?approve=<?php echo $row["id"]; ?>" title="Click to accept order">
												<i class="fa fa-check" style="font-size:40px"></i>
											</a>
											<?php
										}
										else if($row["status"] === "confirmed") {
											?>
											<a href="vendor-orders.php?delivered=<?php echo $row["id"]; ?>" title="Click if delivered">
												<i class="fa fa-truck" style="font-size:40px"></i>
											</a>
											<?php	
										}
										else {
											?>
											<i class="fa fa-ban" style="font-size:40px"></i>
											<?php
										}
										?>
									</td>
									<td>
										<?php
										if($row["status"] !== "rejected") {
											?>
											<a href="vendor-orders.php?reject=<?php echo $row["id"]; ?>" title="Click to reject order">
												<i class="fa fa-times" style="font-size:40px"></i>
											</a>
											<?php
										}
										else {
											?>
											<i class="fa fa-ban" style="font-size:40px"></i>
											<?php
										}
										?>
									</td>
								</tr>
								<?php
							}
							?>
						</table>
					</div>
				</div>
			</div>
			<p>
				Click on <i class="fa fa-check" style="font-size:25px"></i> to accept the order<br/>
				Click on <i class="fa fa-times" style="font-size:25px"></i> to reject the order<br/>
				Click on <i class="fa fa-truck" style="font-size:25px"></i> if order is successfully delivered
			</p>
		</div>
	</section>
	<?php
}
?>
<hr/>
<?php
mysqli_query($db,"SET @count:=0");
$res = mysqli_query($db, "SELECT (@count:=@count+1) AS sn, cus.id as cusid, o.id, comid, c.name as comname, image_url, cus.name as cusname,quantity, ordertype, status, ts,cus.lat, cus.lon FROM orders as o, commodities as c, customers as cus, vendors as v WHERE v.id = c.vid and o.comid = c.id and cus.id=o.uid and v.id=".$_SESSION['id']." and status in ('done','rejected','cancelled') LIMIT 0,10");
if(!$res) {
	array_push($err, mysqli_error($db));
}
?>
<section class="bgwhite text-center p-t-30 p-b-30">
	<div class="container">
		<h2 class="center">
			Completed Orders
		</h2>
	</div>
</section>
<?php	
if(mysqli_num_rows($res) <= 0) {
	?>
	<section class="bgwhite text-center p-t-10 p-b-10">
		<div class="container">
			<h3 class="center">Nothing for now !!</h3>
		</div>
	</section>
	<?php
}
else {
	?>
	<section class="cart bgwhite p-t-10">
		<div class="container">
			<div class="row">
				<!-- Cart item -->
				<div class="container-table-cart pos-relative col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div class="wrap-table-shopping-cart bgwhite">
						<table class="table-shopping-cart" style="overflow: hidden;">
							<tr class="table-head">
								<th class="column-1 notranslate">S.N.</th>
								<th class="column-2" colspan="2">Commodity</th>
								<th class="column-3">Customer</th>
								<th class="column-4">Quantity</th>
								<th class="column-5">Order Type</th>
								<th class="column-6">Status</th>
								<th class="column-7">Time Stamp</th>
								<th>Map</th>
							</tr>
							<?php
							while($row = mysqli_fetch_assoc($res)) {
								?>
								<tr class="table-row">
									<td class="column-1"><?php echo $row['sn']; ?></td>
									<td>
										<a href="product-detail.php?commodityid=<?php echo $row["comid"]; ?>">
											<img src="<?php echo $row['image_url']; ?>" class="imgur-image" />
										</a>
									</td>
									<td>
										<a href="product-detail.php?commodityid=<?php echo $row["comid"]; ?>"><?php echo ucwords($row["comname"]); ?></a>
									</td>
									<td class="column-3 notranslate"><?php echo $row["cusname"]."<br/>id: #{$row['cusid']}"; ?></td>
									<td class="column-4"><?php echo $row["quantity"]; ?></td>
									<td class="column-5">
										<?php echo ucwords($row["ordertype"]); ?>
									</td>
									<td class="column-6">
										<?php echo ucwords($row["status"]); ?>
									</td>
									<td class="column-7">
										<?php echo $row["ts"]; ?>
									</td>
									<td>
										<a style="padding:0; margin:0; display:block;" href="https://www.google.com/maps/dir/?api=1&destination=<?php echo $row['lat'].','.$row['lon']; ?>&dir_action=navigate" target="_blank">Navigate <span style="padding:0; margin:0; display:block;" class="notranslate">Google Maps</span></a>
									</td>
								</tr>
								<?php
							}
							?>
						</table>
					</div>
				</div>
			</div>
		</section>
		<hr/>
		<?php
	}
	?>
	<section class="cart bgwhite p-t-10">
		<div class="container">
			<h4>Status Note:</h4>
			<div> Rejected <span> - Rejected by the Vendor</span></div>
			<div> Cancelled <span> - Cancelled by the Customer</span></div>
			<div> Not Confirmed <span> - Yet to be approved by Vendor</span></div>
			<div> Done <span> - Order is successfully received by Customer</span></div>
		</div>
	</section>
	<? require('footer.php'); ?>
</body>
</html>