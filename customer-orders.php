<?php
require_once('database.php');
require_once('server.php');

if(!isset($_SESSION['customer']) || empty($_SESSION['customer'])) {
	header('location:index.php');
}
$lat = 0;
$lon = 0;
$uid=$_SESSION['id'];
$uname=$_SESSION['name'];
$uemail = filter_var($_SESSION['email'], FILTER_SANITIZE_EMAIL);
$uphone=$_SESSION['customer'];

function custom_msg($x, $length)
{
	if(strlen($x)<=$length)
	{
		return $x;
	}
	else
	{
		$y=substr($x,0,$length) . '...';
		return $y;
	}
}


if(isset($_POST['cartcheckout']) && !empty($_POST['cartcheckout'])) {
	$ordertype = $_POST["ordertype"];

	$res = mysqli_query($db, "SELECT v.name as vname, email, c.name as comname,price,phone,car.id,cid,quantity FROM cart as car, commodities as c, vendors as v WHERE car.cid=c.id and c.vid=v.id and uid = $uid");
	while($row = mysqli_fetch_assoc($res)) {
		$cartid[] = $row['id'];
		$comid[] = $row['cid'];
		$comname[] = $row['comname'];
		$quantity[] = $row['quantity'];
		$price[] = $row['price'];
		$vphone[] = $row['phone'];
		$vemail[] = filter_var($row['email'], FILTER_SANITIZE_EMAIL);
		$vname[] = $row['vname'];
	}
	foreach ($comid as $key => $c) {
		$res = mysqli_query($db, "INSERT into orders(uid, comid, quantity, ordertype, status) values($uid, {$comid[$key]}, {$quantity[$key]},'$ordertype', 'not confirmed')");
		$res = mysqli_query($db, "DELETE FROM cart WHERE id={$cartid[$key]} and uid=$uid"); 
		$res = mysqli_query($db, "SELECT o.id from orders as o, commodities as c where o.comid=c.id and o.uid=$uid and c.id={$comid[$key]} and quantity={$quantity[$key]} and status='not confirmed' order by ts desc");

		$first = mysqli_fetch_assoc($res);
		$orderid = $first['id'];

		// Send SMS to Vendor.. And, Email to Vendor and Customer
		$response = sendSms($vphone[$key],"Hi ".custom_msg($vname[$key],20).", you received an order(#".$orderid.") for $ordertype of {$quantity[$key]} quantity of ".custom_msg($comname[$key],20)." by ".custom_msg($uname,20)."($uphone). - AgMarket.in");
		/*
		if (filter_var($uemail, FILTER_VALIDATE_EMAIL)) {
			mail($uemail,'Order for {$comname[$key]} #$orderid',"Greetings $uname, \r\n\r\n Your order has been successfully placed with order id #$orderid. \r\n\r\n \r\n Order Summary:\r\n Order Type: $ordertype \r\n Commodity: {$comname[$key]} <br/> Quantity: {$quantity[$key]} <br/> Rate (per KG/Entity): {$price[$key]} <br/> Vendor Name: {$vname[$key]} <br/> Vendor Number: {$vphone[$key]} \r\n\r\n\r\n\r\n <a href='www.AgMarket.in'>VIA: www.AgMarket.in </a>",'From: no.reply @ agmarket.in');
		}
		if (filter_var($vemail[$key], FILTER_VALIDATE_EMAIL)) {
			mail($vemail[$key],'Order for {$comname[$key]} #$orderid',"Greetings {$vname[$key]}, \r\n\r\n You have received an order with order id #$orderid. \r\n\r\n \r\n Order Summary:\r\n Order Type: $ordertype \r\n Commodity: {$comname[$key]} <BR> Quantity: {$quantity[$key]} <br/> Rate (per KG/Entity): {$price[$key]} <br/> Customer Name: $uname <br/> Customer Number: $uphone \r\n\r\n\r\n\r\n <a href='www.AgMarket.in'>VIA: www.AgMarket.in </a>",'From: no.reply @ agmarket.in');
		}
		*/

		# echo "SMS Response : $response";
		// Length:	name = 20, uname = 20, comname=20, if exceeds then 20 + 3 dots = 23 each
	}
}

if(isset($_GET['remove']) && !empty($_GET['remove'])) {
	$orderid = $_GET['remove'];
	$res = mysqli_query($db, "UPDATE orders SET status='cancelled' where id=$orderid and uid=$uid");

	if(mysqli_affected_rows($db)==1) {
		$res = mysqli_query($db,"SELECT email,phone,price,ordertype,quantity,c.name as comname,v.name as vname from vendors as v, orders as o, commodities as c where o.comid=c.id and v.id=c.vid and o.id=$orderid and uid=$uid");
		$first = mysqli_fetch_assoc($res);
		
		// SMS and E-mail Response
		$vemail = filter_var($first['email'], FILTER_SANITIZE_EMAIL);
		$response = sendSms($first['phone'],"Hi ".custom_msg($first['vname'],20).", Order(#".$orderid.") for {$first['ordertype']} of ".custom_msg($first['comname'],20)." has been cancelled by the customer. - AgMarket.in");
		/*
		if (filter_var($uemail, FILTER_VALIDATE_EMAIL)) {
			mail($uemail,"Order Cancelled for {$first['comname']} #$orderid","Greetings $uname, \r\n\r\n Your order(#$orderid) has been successfully cancelled as per your request. \r\n\r\n \r\nOrder Summary:\r\n Order Type: {$first['ordertype']} \r\n Commodity: {$first['comname']} <br/> Quantity: {$first['quantity']} <br/> Rate (per KG/Entity): {$first['price']} \r\n\r\n\r\n <a href='www.AgMarket.in'>VIA: www.AgMarket.in </a>",'From: no.reply @ agmarket.in');
		}
		if (filter_var($vemail, FILTER_VALIDATE_EMAIL)) {
			mail($vemail[$key],'Order for {$comname[$key]} #$orderid',"Greetings {$first['vname']}, \r\n\r\n Order with order id #$orderid has been cancelled by the customer. \r\n\r\n \r\nOrder Summary:\r\n Order Type: {$first['ordertype']} \r\nCommodity: {$first['comname']} <BR> Quantity: {$first['quantity']} <br/> Rate (per KG/Entity): {$first['price']} \r\n\r\n\r\n\r\n <a href='www.AgMarket.in'>VIA: www.AgMarket.in </a>",'From: no.reply @ agmarket.in');
		}
		*/

		array_push($success,"Order successfully cancelled.");
	}
	else {
		array_push($errors,"Order failed to be cancelled.");
	}
}

require_once('header.php');
include('errors.php');
?>

<!-- Title Page -->
<section class="bg-title-page p-t-40 p-b-50 flex-col-c-m" style="background-image: url(https://i.imgur.com/gb2XZv8.png);">
	<h2 class="l-text2 t-center rounded p-t-10 p-b-10 p-l-10 p-r-10 bg-primary">
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
								while($row = mysqli_fetch_assoc($res)) {
									$total = 0;
									$lat = $row['lat'];
									$lon = $row['lon'];
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

											<div><a style="padding:0; margin:0;" href="https://www.google.com/maps/dir/?api=1&destination=<?php echo $lat.','.$lon; ?>&dir_action=navigate" target="_blank" title="Navigate in Google Maps">Navigate to <span style="display:block;padding:0; margin:0;" class="notranslate">Vendor</span></a></div>
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
				<h2 class="center">List of Recently Completed Orders</h2>
			</div>
		</section>
		<?php
		mysqli_query($db,"SET @count:=0");
		$res = mysqli_query($db, "SELECT (@count:=@count+1) as sn, comid, lat,lon, o.id, com.name as comname,v.name as vname, vid, uid, price, quantity, ordertype, image_url, status from orders as o, vendors as v,commodities as com where o.comid=com.id and com.vid=v.id and uid=$uid and status in ('cancelled','rejected','done') order by ts limit 0,10");
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
									<th></th>
								</tr>
								<?php
								while($row = mysqli_fetch_assoc($res)) {
									$total = 0;
									$lat = $row['lat'];
									$lon = $row['lon'];
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
											<div><a style="padding:0; margin:0;" href="https://www.google.com/maps/dir/?api=1&destination=<?php echo $lat.','.$lon; ?>&dir_action=navigate" target="_blank" title="Navigate in Google Maps">Navigate to <span style="display:block;padding:0; margin:0;" class="notranslate" at>Vendor</span></a></div>
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