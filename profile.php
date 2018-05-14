<?php
require_once('database.php');
require_once('server.php');

if(isset($_GET['vendorid']) && !empty($_GET['vendorid'])) {
	$vid = $_GET['vendorid'];

	$first = mysqli_query($db, "SELECT id FROM vendors where id={$vid}");
	if(!$first) {
		array_push($errors, mysqli_error($db));
	}
	if(mysqli_num_rows($first) < 1) {
		array_push($errors,"Invalid Vendor ID !!");
	}
}
else if(isset($_SESSION['vendor']) && !empty($_SESSION['vendor']))
	$vid = $_SESSION['id'];
else
	header('location: index.php');

require_once('header.php'); 

// SELECT id, (select count(id) from commodities where vid=$vid group by vid) as stockitems,name, place, phone, email, lat, lon FROM vendors WHERE id=$vid

$res = mysqli_query($db, "SELECT id, (select count(*) from commodities where vid=$vid) as stockitems,name, place, phone, email, lat, lon FROM vendors WHERE id=$vid");
if(!$res) {
	array_push($errors, mysqli_error($db));
}

include('errors.php');
?>

<!-- Title Page -->
<section class="bg-title-page p-t-40 p-b-50 flex-col-c-m" style="background-image: url(https://i.imgur.com/CX5GhVZ.png);">
	<h2 class="l-text2 t-center rounded p-t-10 p-b-10 p-l-10 p-r-10 bg-danger text-white">
		Vendor Profile
	</h2>
</section>

<?php
if(mysqli_num_rows($res) <= 0) {
	?>
	<section class="bgwhite text-center p-t-30 p-b-30">
		<div class="container">
			<h3 class="center">Vendor with the ID #<?php echo $vid; //$_GET['vendorid']; ?> does not exist !!</h3>
			<h3><a href="index.php" alt="AgMarket Home Page" style="text-decoration: underline;">CLICK HERE</a> to go to main page</h3>
		</div>
	</section>
	<?php
}
else {
	$first = mysqli_fetch_assoc($res);
	$lat = $first['lat'];
	$lon = $first['lon'];
	?>
	<!-- Cart -->
	<section class="cart bgwhite p-t-30">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 p-b-30">
					<!-- Rating and Google Map Location -->
					<div class="bo9 p-l-40 p-r-40 p-t-30 p-b-38 m-r-0 m-l-0 p-lr-15-sm">
						<h5 class="m-text20 p-b-24">
							Vendor Ratings
						</h5>
						<div class="content">
							<?php
							$averageRating = 0;
							$countRating = 0;
						// User rating
							$query = "SELECT * FROM rating WHERE vid=$vid ";
							if(isset($_SESSION['customer']) && !empty($_SESSION['customer']))
								$query .= 'and uid='.$_SESSION['id'];

							$userresult = mysqli_query($db,$query);
							if(!$userresult)
								array_push($errors,mysqli_error());

							$fetchRating = mysqli_fetch_array($userresult);
							$rating = $fetchRating['rating'];

						// get average
							$query = "SELECT ROUND(AVG(rating),1) as averageRating,count(*) as countRating FROM rating WHERE vid=$vid";
							$avgresult = mysqli_query($db,$query);
							if(!$avgresult)
								array_push($errors,mysqli_error());
							
							if(mysqli_num_rows($avgresult)>=1) {
								$fetchAverage = mysqli_fetch_array($avgresult);
								$averageRating = $fetchAverage['averageRating'];
								$countRating = $fetchAverage['countRating'];
							}
							if($averageRating <= 0) {
								$averageRating = "No rating yet";
								$countRating = 0;
							}
							?>
							<div class="post">
								<div class="post-action">
									<!-- Rating -->
									<h4>Average Rating : <span id='avgrating_<?php echo $vid; ?>'><?php echo $averageRating; ?></span><?php echo "(".$countRating.")";;?></h4>
									<?php
									for($x=1;$x<=5;$x++) {
										?>
										<i class="fa fa-star fa-2x star <?php
										if($x<=floor($averageRating))
											echo "star-checked";
										?>"></i>
										<?php
									}
								?>
								<div style='clear: both;'></div>
								<?php
								if(isset($_SESSION['customer']) && !empty($_SESSION['customer']))
								{
									$uid = $_SESSION['id'];
									?>
									<p>Your Rating</p>
									<select class='rating' id='rating_<?php echo $vid; ?>' data-id='rating_<?php echo $vid; ?>'>
										<option value="" ></option>
										<option value="1" >1</option>
										<option value="2" >2</option>
										<option value="3" >3</option>
										<option value="4" >4</option>
										<option value="5" >5</option>
									</select>
									<hr/>
									<?php
								}
								?>
							</div>
						</div>
					</div>
				</div>
				<!--  Google Map with Marker on Customer's Location -->
				<div class="bo10 flex-w flex-sb p-t-20 p-b-5">
					<span class="s-text18 w-full-sm">
						Vendor Location:
					</span>
					<div class="flex-w flex-sb p-t-5 p-b-20">
						<p style="display: inline;"><a href="https://www.google.com/maps/dir/?api=1&destination=<?php echo $lat.','.$lon; ?>&dir_action=navigate" target="_blank">Open <span class="notranslate">Google Maps</span></a></p>
						<div id="map"> Map with your location should display here </div>
						<span class="s-text8 p-b-10">
							If the above is not accurate, please contact vendor to correct the location.
						</span>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
				<h2>Vendor Name: <span class="notranslate"><?php echo ucwords($first['name']); ?></span></h2>
				<h3>Place: <?php echo $first['place']; ?></h3>
				<h3>Email: <span class="notranslate"><?php echo $first['email']; ?></span></h3>
				<h3>Phone:
					<a href="tel:<?php echo $first['phone']; ?>">
						<h3 style="display: inline;"><?php echo $first['phone']; ?></h3>
					</a>
				</h3>
				<h3>Total number of commodities: <?php echo $first['stockitems']; ?></h3>

				<?php
				$res = mysqli_query($db,"set @count:=0");
				$res = mysqli_query($db, "SELECT (@count:=@count+1) as sn, v.id, c.id as cid, c.name as cname, cat.name as category, avail, price, catid, image_url FROM commodities as c, categories as cat, vendors as v WHERE cat.id=c.catid and v.id=c.vid and v.id=$vid LIMIT 0,10");
				if(mysqli_num_rows($res)<=0) {
					?>
					<section class="cart bgwhite text-center p-t-70 p-b-70">
						<div class="container">
							<h5 class="center">Vendor does not have any commodities available for sale right now!</h5>
						</div>
					</section>
					<?
				}
				else {
					?>
					<!-- Cart item -->
					<div class="container-table-cart pos-relative p-t-20">
						<div class="wrap-table-shopping-cart bgwhite">
							<table class="table-shopping-cart" style="overflow: hidden;">
								<tr class="table-head">
									<th class="column-1 notranslate">S.N.</th>
									<th class="column-2" colspan="2">Commodity Name</th>
									<th class="column-3">Category</th>
									<th class="column-4">Rate (₹ per KG/Entity)</th>
									<th class="column-5">Available (KG/Entity)</th>
								</tr>
								<?php
								while($row = mysqli_fetch_assoc($res)) {
									?>
									<tr class="table-row">
										<td class="column-1"><?php echo $row["sn"]; ?></td>
										<td>
											<img src="<?php echo $row['image_url']; ?>" class="imgur-image" />
										</td>
										<td>
											<?php echo $row["cname"]; ?>
										</td>
										<td class="column-3"><?php echo $row["category"]; ?></td>
										<td class="column-4"><?php echo $row["price"]; ?></td>
										<td class="column-5"><?php echo $row["avail"]; ?></td>
									</tr>
									<?php
								}
								?>
							</table>
						</div>
					</div>
					<?php
				}
				?>
			</div>
		</div>
	</div>
</div>
</section>
<?php
}
?>
<hr/>
<?php require_once('footer.php'); ?>
<!--===============================================================================================-->
<!-- Set rating -->
<script type='text/javascript'>
	$(function() {
		$('.rating').barrating({
			theme: 'fontawesome-stars',
			onSelect: function(value, text, event) {
				// Get element id by data-id attribute
				var el = this;
				var el_id = el.$elem.data('id');

				// rating was selected by a user
				if (typeof(event) !== 'undefined') {
					var split_id = el_id.split("_");
					var vid = split_id[1]; // postid
					// AJAX Request
					$.ajax({
						url: 'rating_ajax.php',
						type: 'post',
						data: {vid:vid,rating:value},
						dataType: 'json',
						success: function(data){
							// Update average
							var average = data['averageRating'];
							$('#avgrating_'+vid).text(average);
						}
					});
				}
			}
		});
	});
	$(document).ready(function(){
		$('#rating_<?php echo $vid; ?>').barrating('set','<?php echo $rating; ?>');
	});
</script>
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