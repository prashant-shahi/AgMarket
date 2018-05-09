<?php

require_once('database.php');
require_once('server.php');

if(!isset($_SESSION['customer']) || empty($_SESSION['customer']))
	header('location:index.php');

$uid = $_SESSION['id'];

if(isset($_POST['updatecart']) && !empty($_POST['updatecart'])) {
	$ci = $_POST['cartid'];
	$quantity = $_POST["quantity"];
	foreach ($quantity as $key => $q) {
		$res = mysqli_query($db, "UPDATE cart SET quantity=$q where id={$ci[$key]} and uid = $uid");
	}
	header('location:cart.php?status=success');
}
if(isset($_GET['remove']) && !empty($_GET['remove'])) {
	$res = mysqli_query($db, "DELETE FROM cart where id={$_GET['remove']} and uid = $uid");
	if(mysqli_affected_rows($db)==1) {
		header('location:cart.php?remstatus=success');
	}
	else {
		header('location:cart.php?remstatus=failure');
	}
}
require_once('header.php'); 
require_once('errors.php'); 
?>

<!-- Title Page -->
<section class="bg-title-page p-t-40 p-b-30 flex-col-c-m" style="background-image: url(images/heading-pages-01.jpg);">
	<h2 class="l-text2 t-center">
		Cart
	</h2>
</section>

<?php
$lat = 0;
$lon = 0;

mysqli_query($db,"SET @count:=0");
$res = mysqli_query($db, "SELECT cr.id as cartid,(@count:=@count+1) AS sn,image_url, uid, c.id as cid,vid, c.name as commodity, avail, v.name as vendor, cus.lat as lat, cus.lon as lon, quantity, price,(quantity*price) as total FROM customers as cus, cart as cr,commodities as c,vendors as v WHERE uid=".$_SESSION['id']." and cr.cid=c.id and c.vid=v.id and cus.id=uid");

if (mysqli_num_rows($res) <= 0) {
	?>
	<section class="cart bgwhite text-center p-t-70 p-b-70">
		<div class="container">
			<h2 class="center">Cart is empty ! <br/><a href="customer-index.php" alt="AgMarket Home Page" style="text-decoration: underline;">Browse and Add commodities in the sack !!</a></h2>
		</div>
	</section>
	<?php
}
else {
	?>
	<!-- Cart -->
	<section class="cart bgwhite p-t-20">
		<div class="container">
			<?php
			if(isset($_GET['status']) and !empty($_GET['status'])) {
				$str = "updated";
				$s = $_GET['status'];
				if($s != "success" and $s != "failure")
					$s = "warning";
			}
			if(isset($_GET['remstatus']) and !empty($_GET['remstatus'])) {
				$str = "removed";
				$s = $_GET['remstatus'];
				if($s != "success" and $s != "failure")
					$s = "warning";
			}
			if(isset($str)) {
				?>
				<div class="alert <?php echo $s; ?>">
					<span class="closebtn">&times;</span> 
					<strong><?php echo ucfirst($s); ?>!</strong>
					<?php
					switch($s) {
						case "success"	: echo "Cart item successfully $str !!";
						break;
						case "failure" 	: echo "Cart item failed to be $str !!";
						break;
						default 		: echo "Baka, Cart item status not to be played with !!";
					}
					?>
				</div>
				<?php
			}
			?>
			<div class="row">
				<form method="POST" action="" class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
					<!-- Cart item -->
					<div class="container-table-cart pos-relative">
						<div class="wrap-table-shopping-cart bgwhite">
							<table class="table-shopping-cart" style="overflow: hidden;">
								<tr class="table-head">
									<th class="column-1 notranslate">S.N.</th>
									<th class="column-2" colspan="2">Commodity Name</th>
									<th class="column-3">Vendor Name</th>
									<th class="column-4">Rate (₹ per KG/Entity)</th>
									<th class="column-5">Quantity (KG/Entity)</th>
									<th class="column-6">Price</th>
									<th class="column-7">Map</th>
									<th></th>
								</tr>
								<?php
								$gtotal = 0;
								while($row = mysqli_fetch_assoc($res)) {
									$total = 0;
									$i = $row["sn"];
									$j = $i - 1;
									$lat = $row["lat"];
									$lon = $row["lon"];
									?>
									<tr class="table-row">
										<td class="column-1"><?php echo $i; ?></td>
										<td>
											<a href="product-detail.php?commodityid=<?php echo $row["cid"]; ?>">
												<img src="<?php echo $row['image_url']; ?>" class="imgur-image" />
											</a>
										</td>
										<td>
											<a href="product-detail.php?commodityid=<?php echo $row["cid"]; ?>">
												<strong><?php echo $row["commodity"]; ?></strong>
											</a>
										</td>
										<td class="column-3 notranslate">
											<a href="profile.php?vendorid=<?php echo $row["vid"]; ?>">	
												<strong><?php echo $row["vendor"]; ?></strong>
											</a>
										<td class="column-4 notranslate">
											₹ <strong class="price" id="<?php echo $j.'-price'; ?>">
												<?php echo $row["price"]; ?>
											</strong>
										</td>
										<td class="column-5 notranslate">
											<input type="text" name="cartid[]" value="<?php echo $row["cartid"]; ?>" hidden="hidden" />
											<i class="minus fa fa-minus-square" style="font-size:36px;"></i>
											<input type="number" name="quantity[]" class="quantity size8 m-text18 t-center num-product" min="1" max="<?php echo $row["avail"]; ?>" value="<?php echo $row["quantity"]; ?>" />
											<i class="plus fa fa-plus-square" style="font-size:36px;"></i>
										</td>
										<td class="column-6 notranslate">
											₹ <strong class="total" id="<?php echo $j.'-total'; ?>">
												<?php
												$total = $row["total"];
												$gtotal += $total;
												echo $total;
												?>
											</strong>
										</td>
										<td class="column-7">
											<div><a style="padding:0; margin:0;" href="https://www.google.com/maps/dir/?api=1&destination=<?php echo $lat.','.$lon; ?>&dir_action=navigate" target="_blank">Navigate<span style="display:block;padding:0; margin:0;" class="notranslate">Google Maps</span></a></div>
										</td>
										<td>
											<a href="cart.php?remove=<?php echo $row['cartid']; ?>">
												<i class="fa fa-trash-o" style="font-size:36px"></i>
											</a>
										</td>
									</tr>
									<?php
								}
								?>
							</table>
						</div>
						<div class="row" style="margin:0 auto;">
							<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
								<h4 class="float-right">
									Sub-total : ₹ <span class="notranslate" id="totalPrice"><?php echo $gtotal; ?></span>
								</h4>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
								<!-- Button -->
								<input type="submit" name="updatecart" class="float-left flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" value="Update Cart" />
							</div>
						</div>
					</div>
				</form>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
					<!-- Total -->
					<form method="POST" action="customer-orders.php">
						<div class="bo9 p-l-40 p-r-40 p-t-30 p-b-38 m-r-0 m-l-0 p-lr-15-sm">
							<h5 class="m-text20 p-b-24">
								Cart Totals
							</h5>

							<!--  -->
							<div class="flex-w flex-sb-m p-b-12">
								<span class="s-text18 w-size19 w-full-sm">
									Total:
								</span>

								<span class="m-text21 w-size20 w-full-sm">
									₹ <?php echo $gtotal; ?>
								</span>
								<p class="s-text8 p-b-10">
									Exclusive of the delivery cost, if choosen for delivery.
								</p>
							</div>
							<div class="rs2-select2 rs3-select2 rs4-select2 bo4 of-hidden w-size21 m-b-12">
								<select class="selection-2" name="ordertype" required>
									<option selected="true" disabled="disabled"  value="">Order Type</option>
									<option>Delivery</option>
									<option>Pickup</option>
								</select>
							</div>

							<!--  Google Map with Marker on Customer's Location -->
							<div class="bo10 flex-w flex-sb p-t-15 p-b-20">
								<span class="s-text18 w-full-sm">
									Your Location:
								</span>
								<div class="flex-w flex-sb p-t-15 p-b-20">
									<div id="map"> Map with your location should display here </div>
									<span class="s-text8 p-b-10">
										If the above is not accurate, go to your profile and modify your location.
									</span>
								</div>
							</div>

							<!-- Total  -->
							<div class="flex-w flex-sb-m p-t-26 p-b-30">
								<span class="m-text22 w-size19 w-full-sm">
									Total:
								</span>
								<span class="m-text21 w-size20 w-full-sm">
									₹ <?php echo $gtotal; ?>
								</span>
							</div>
							<div class="size15 trans-0-4">
								<!-- Button -->
								<input type="submit" name="cartcheckout" class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" value="Proceed to Checkout" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
	<?php }
	require_once('footer.php');
	?>
	<!-- Container Selection -->
	<div id="dropDownSelect1"></div>
	<div id="dropDownSelect2"></div>

	<script type="text/javascript">
		$(".selection-1").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});

		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect2')
		});
	</script>
	<!--=============================================================================================== -->
	<script>
// we used jQuery 'keyup' to trigger the computation as the user type
$('.quantity').keyup(function () {
setTimeout(function() {   //calls click event after a certain time
	cartUpdate();
}, 1000);
});
$('.minus').click(function(){
	var q = parseInt($(this).next().val())-1;
	$(this).next().val(q);
	cartUpdate(-1,this);
});
$('.plus').click(function(){
	var q = parseInt($(this).prev().val())+1;
	$(this).prev().val(q);
	cartUpdate(1,this);
});

var cartUpdate = function(pos,x) {

// initialize the sum (total price) to zero
var total = 0;
var sum = 0;
var max = 0;
// we use jQuery each() to loop through all the textbox with 'price' class
// and compute the sum for each loop
$('.quantity').each(function(index) {
	max = parseInt($(this).attr("max"));
	quantity=$(this).val();

	if(quantity>max) {
		quantity = max;
		$(this).val(quantity);
		agalert("AgMarket - Max Alert","Maximum quantity for the commodity provided by selected vendor is " + max,"red");
	}
	if(quantity<1) {
		quantity = 1;
		$(this).val(quantity);
		agalert("AgMarket - Min Alert","Minumum quantity for the commodity provided by selected vendor is 1","red");
	}

	sum = Number($("#"+index+"-price").html())*Number(quantity);
	$("#"+index+"-total").html(sum.toString());
}); 

$('.total').each(function(index) {
	total += Number($(this).html());
// set the computed value to 'totalPrice' textbox
$('#totalPrice').html(total.toString());
}, 100);
}
</script> 
<!--===============================================================================================-->
<!-- Loading Google API -->
<script type="text/javascript">
	var map;
	function initMap() {
		var latlng = new google.maps.LatLng(<?php echo $lat . "," . $lon; ?>);
		map = new google.maps.Map(document.getElementById('map'), {
			center: latlng,
			zoom: 10,
			clickableIcons: false,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			title: 'Set lat/lon values for this property',
			draggable: false
		});
	}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmt9muKRq8oFoSiZQw-B0hcG-aBrvUNPo&callback=initMap"
async defer></script>
</body>
</html>