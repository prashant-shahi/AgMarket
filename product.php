<?php
require('database.php');
require('server.php');
require('categoryfunction.php');

if(isset($_SESSION['customer']) && !empty($_SESSION['customer'])) {
	$cid=$_SESSION['id'];
}
else {
	header('location:index.php');
}

$catid = 0;
$begin=0;
$offset=9;
$searchtxt="";

if(isset($_GET['categoryid']) && !empty($_GET['categoryid'])) {
	$catid = $_GET['categoryid'];
}
$querystr = " and catid in ($catid";

if(isset($_GET['begin']) && !empty($_GET['begin'])) {
	$begin = $_GET['begin'];
}
if(isset($_GET['search-product']) && !empty($_GET['search-product'])) {
	$searchtxt = " and com.name like '%".$_GET['search-product']."%' ";
}

$catres = fetchCategoryChildren($catid);
foreach ($catres as $key=>$value) {
	$querystr .= ", ".$value;
}
$querystr .= ") ";

$res = mysqli_query($db,"SELECT count(*) as count from commodities as com, categories as cat, vendors as v where v.id=com.vid and cat.id=com.catid $querystr $searchtxt");

$countresult=mysqli_fetch_assoc($res);
$count = $countresult['count'];

require('header.php');
require('errors.php');

function distance($lat1, $lon1, $lat2, $lon2, $unit) {
	$theta = $lon1 - $lon2;
	$dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
	$dist = acos($dist);
	$dist = rad2deg($dist);
	$miles = $dist * 60 * 1.1515;
	$unit = strtoupper($unit);

	if ($unit == "K") {
		return ($miles * 1.609344);
	}
	else if ($unit == "METER") {
		return ($miles * 1.609344/1000);
	} else if ($unit == "N") {
		return ($miles * 0.8684);
	} else {
		return $miles;
	}
}

?>

<!-- Title Page -->
<section class="bg-title-page p-t-50 p-b-40 flex-col-c-m" style="background-image: url(images/heading-pages-02.jpg);">
	<h2 class="l-text2 t-center">
		Agriculture Commodities
	</h2>
	<p class="m-text13 t-center">
		All types of Agriculture Commodities Trade
	</p>
</section>

<!-- Content page -->
<section class="bgwhite p-t-55 p-b-65">
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-md-4 col-lg-3 p-b-30">
				<form class="search-product pos-relative bo4 of-hidden m-b-30" action="" method="GET">
					<input type="hidden" name="categoryid" value="<?php echo $catid; ?>" />
					<input class="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products..." />

					<button type="submit" value="searchcommodity" class="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
						<i class="fs-12 fa fa-search" aria-hidden="true"></i>
					</button>
				</form>
				<div class="leftbar p-r-20 p-r-0-sm">
					<!--  -->
					<h4 class="m-text14 p-b-7">
						Categories
					</h4>
					<p><a class="size6 p-t-5" href="product.php?categoryid=0">ALL</a></p>
					<?php
					$rescat = fetchCategoryTreeList();
					foreach ($rescat as $key=>$r) {
						echo  $r;
					}
					?>
				</div>
			</div>
			<?php

			if($count<=0) {
				?>
				<div class="flex-sb-m flex-w p-b-35">
					<h3>
						No Commodities Available for the selected category
					</h3>
				</div>
				<?php
			}
			else {
				$res = mysqli_query($db,"SELECT vid,c.id,c.lat as lat1, c.lon as lon1, v.lat as lat2,v.lon as lon2 from vendors as v, commodities as com, customers as c where com.vid=v.id and c.id=$cid  group by vid");

				while($latlon = mysqli_fetch_assoc($res)) {
					$distancearray[$latlon['vid']] = distance($latlon['lat1'],$latlon['lon1'],$latlon['lat2'],$latlon['lon2'],"K");
					}
				$vidstr = "ORDER BY FIELD(vid, '0'";
				asort($distancearray);
				foreach ($distancearray as $key => $value) {
					$vidstr .= ", '".$key."'";
				}
				$vidstr .= ") asc,comname asc";

				$res = mysqli_query($db,"SELECT com.id as comid, com.name as comname, avail, vid, price, catid, image_url, cat.name as catname, parentid, v.name as vname, lon, lat from commodities as com, categories as cat, vendors as v where v.id=com.vid and cat.id=com.catid $searchtxt $querystr $vidstr LIMIT $begin,$offset");
				if(!$res)
					array_push($errors,mysqli_error());
				?>
				<div class="col-sm-6 col-md-8 col-lg-9 p-b-25">
					<!--  -->
					<div class="flex-sb-m flex-w p-b-35">
					<!--
					<div class="flex-w">
						<div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
							<select class="selection-2" name="sorting">
								<option>Default Sorting</option>
								<option>Popularity</option>
								<option>Price: low to high</option>
								<option>Price: high to low</option>
							</select>
						</div>

						<div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
							<select class="selection-2" name="sorting">
								<option>Price per kg</option>
								<option>₹0 - ₹100</option>
								<option>₹100 - ₹500</option>
								<option>₹500 - ₹1000</option>
								<option>₹1000 - ₹5000</option>
								<option>₹5000+</option>
							</select>
						</div>
						<div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
							<select class="selection-2" name="sorting">
								<option>Price per kg</option>
								<option>₹0 - ₹100</option>
								<option>₹100 - ₹500</option>
								<option>₹500 - ₹1000</option>
								<option>₹1000 - ₹5000</option>
								<option>₹5000+</option>
							</select>
						</div>
					</div>
				-->
				<span class="s-text7 p-t-5 p-b-5">
					Default Sorting: Nearest Location
				</span>
				<span class="s-text8 p-t-5 p-b-5">
					Showing <?php
					echo $begin."-";
					if(($begin+$offset)<=$count)
						echo $begin+$offset;
					else
						echo $count;
					echo " of ".$count;
					?> results
				</span>
			</div>

			<!-- 12? Product -->
			<div class="row">
				<?php
				while($row=mysqli_fetch_assoc($res)) {
					?>
					<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">
						<!-- Block2 -->
						<div class="block2">
							<div class="block2-img wrap-pic-w of-hidden pos-relative">
								<img src="<?php echo $row['image_url']; ?>" alt="IMG-PRODUCT">
								<div class="p-t-10 p-l-140 block2-overlay trans-0-4 text-white">
									Available : <?php echo $row['avail']; ?>
									<div class="w-size1">
										<div class="block2-btn-addcart w-size1">
											<!-- Button -->
											<button class="addtocart flex-c-m size1 bg4 bo-rad-23 hov1 s-text1" id='addtocart_<?php echo $row['comid']; ?>' data-id='addtocart_<?php echo $row['comid']; ?>'>
												Add to Cart
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="block2-txt p-t-5 p-b-5">
								<a href="product-detail.html?id=<?php echo $row['comid'];?>" class="block2-name dis-block s-text3 p-b-5">
									<?php echo  ucwords($row['comname']); ?>
								</a>
								<span class="p-r-5">
									Rate: ₹ <span class="block2-price m-text6" ><?php echo $row['price']; ?></span>
								</span>
								<span class="p-r-5">
									Distance: <span ><?php echo round($distancearray[$row['vid']],4); ?> km</span>
								</span>
								<div class="p-r-5">
									Vendor:
									<a href="profile.php?vendorid=<?php echo $row['vid']; ?>" class="m-text6 notranslate">
										<?php echo $row['vname']; ?>
									</a>
								</div>
							</div>
						</div>
					</div>
					<?php
				}
				?>
			</div>

			<!-- Pagination -->
			<div class="pagination flex-m flex-w p-t-26">
				<?php
				for($x=0;$x<$count/$offset;$x++) {
					?>
					<a href="product.php?categoryid=<?php echo $catid; ?>&begin=<?php echo $x*$offset; ?>" class="item-pagination flex-c-m trans-0-4 active-pagination"><?php echo $x+1; ?></a>
					<?php
				}
				?>
			</div>
		</div>
		<?php
	}
	?>
</div>
</div>
</section>


<!-- Back to top -->
<div class="btn-back-to-top bg0-hov" id="myBtn">
	<span class="symbol-btn-back-to-top">
		<i class="fa fa-angle-double-up" aria-hidden="true"></i>
	</span>
</div>

<?php require('footer.php'); ?>

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
<!--===============================================================================================-->
</body>
</html>