<?php
require_once 'database.php';
require_once 'server.php';
require_once 'categoryfunction.php';

if(isset($_SESSION['customer']) && !empty($_SESSION['customer'])) {
	$cid=$_SESSION['id'];
}
else {
	header('location:index.php');
}

if(!isset($_GET['commodityid']) || empty($_GET['commodityid']))
	header('location:index.php');

$comid = $_GET['commodityid'];
$uid = $_SESSION['id'];

$query = "SELECT cat.name as catname,com.id as comid, v.id as vid, catid, avail, price, image_url, com.name as comname, v.name as vname, place, lat, lon from commodities as com,vendors as v,categories as cat where cat.id=catid and vid=v.id and com.id=$comid";

$res = mysqli_query($db,$query);
if(!$res)
	array_push($errors,mysqli_error());
if(mysqli_num_rows($res)!=1)
	header('location:product.php');

$first = mysqli_fetch_array($res);
$vid = $first['vid'];
$catid = $first['catid'];
$avail = $first['avail'];
$price = $first['price'];
$image_url = $first['image_url'];
$comname = $first['comname'];
$vname = $first['vname'];
$place = $first['place'];
$lat = $first['lat'];
$lon = $first['lon'];
$catname = $first['catname'];
$catstring = "";
?>
<?php
	require_once('header.php'); 
	require_once('errors.php');
?>
<!-- breadcrumb -->
<div class="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
	<a href="index.php" class="s-text16">
		Home
		<i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
	</a>

	<a href="product.php" class="s-text16">
		Categories
		<i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
	</a>

	<a href="product.php?categoryid=<?php echo $catid; ?>" class="s-text16">
		<?php echo ucwords($catname); ?>
		<i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
	</a>

	<span class="s-text17">
		<?php echo ucwords($comname); ?>
	</span>
</div>

<!-- Product Detail -->
<div class="container bgwhite p-t-15 p-b-25">
	<div class="flex-w flex-sb">
		<div class="w-size13 p-t-30 respon5">
			<div class="wrap-slick3 flex-sb flex-w">
				<div class="slick3">
					<div class="wrap-pic-w">
						<img src="<?php echo $image_url; ?>" alt="IMG-PRODUCT">
					</div>
				</div>
			</div>
		</div>

		<div class="w-size14 p-t-30 respon5">
			<h4 class="product-detail-name m-text16 p-b-13">
				<?php echo ucwords($comname); ?>
			</h4>
			<span class="m-text17">
				₹ <?php echo ucwords($price); ?>
			</span>
			<!--  -->
			<div class="p-t-10 p-b-10">
				<div class="flex-r-m flex-w">
					<div class="flex-m flex-w">
						<div class="flex-w of-hidden m-r-22 m-t-10">
							<button class="btn-num-product-down color1 hov1 flex-c-m size7 bg8 eff2">
								<i class="fs-12 fa fa-minus" aria-hidden="true"></i>
							</button>
							<input class="size8 m-text18 t-center num-product" type="number" name="num-product" min="0" max="<?php echo $avail; ?>" value="1" />
							<button class="btn-num-product-up color1 hov1 flex-c-m size7 bg8 eff2">
								<i class="fs-12 fa fa-plus" aria-hidden="true"></i>
							</button>
						</div>
						<div class="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
							<!-- Button -->
							<button class="productcartadd flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class="p-b-45">
				<div class="s-text8">Available: <?php echo $avail; ?></div>
				<div class="s-text8">Commodity ID: <?php echo $comid;//$row['']; ?></div>
				<div class="s-text8">Categories:
					<?php
						$categoryComma = fetchCategoryComma($catid);
						$categorySibling = fetchCategorySibling($catid);
					?>
					<?php
					foreach($categoryComma as $key => $cc) {
						if($key==0)
							echo $cc;
						else
							echo ", ".$cc;
					}
					foreach($categorySibling as $key => $cs) {
						if($key==0)
							$catstring = "'".$cs."'";
						else
							$catstring .= ",'".$cs."'";
					} 
					?>
				</div>
			</div>
			<?php
		// get average
			$query = "SELECT ROUND(AVG(rating),1) as averageRating FROM rating WHERE vid=$vid";
			$avgresult = mysqli_query($db,$query);
			if(!$avgresult)
				array_push($errors,mysqli_error());
			$fetchAverage = mysqli_fetch_array($avgresult);
			$averageRating = $fetchAverage['averageRating'];
			if($averageRating <= 0) {
				$averageRating = "No ratings yet";
			}
			?>
			<!--  -->
			<div class="bo7 p-t-15 p-b-14">
				<a class="s-text8" href="profile.php?vendorid=<?php echo $vid; ?>" title="Open Vendor Profile">
					<h4>Vendor: <?php echo $vname; ?></h4>
				</a>
				<div class="s-text8">Location: <?php echo $place; ?></div>
				<div class="p-t-15 p-b-23">
					<h5 class="flex-sb-m m-text19 trans-0-4">
						Vendor Rating (<?php echo $averageRating; ?>)
					</h5>
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
				</div>
			</div>
		</div>
	</div>
</div>
<hr/>
<!-- Relate Product -->
<section class="newproduct bgwhite p-b-25">
	<div class="container">
		<div class="sec-title p-t-15 p-b-45">
			<h3 class="m-text5 t-center">
				Related Products
			</h3>
		</div>
		<?php
		$res = mysqli_query($db, "SELECT com.id, com.name, com.price, com.avail,com.vid,v.name as vname, image_url FROM vendors as v,commodities as com,categories as cat WHERE cat.id=com.catid and (cat.id in ({$catstring}) or com.name LIKE '%$comname%') and v.id = com.vid ORDER BY RAND() LIMIT 0,10");
		if (mysqli_num_rows($res)<=0) {
			?>
			<h2 class="t-center">No Related Commodities Available Right now. !</h2>
			<?php
		}
		else {
			?>
			<!-- Slide2 -->
			<div class="wrap-slick2">
				<div class="slick2">
					<?php
					while($row = mysqli_fetch_assoc($res)) {
						?>
						<div class="item-slick2 p-l-15 p-r-15">
							<!-- Block2 -->
							<div class="block2">
								<div class="block2-img wrap-pic-w of-hidden pos-relative">
									<img src="<?php echo $row['image_url']; ?>"  alt="IMG-PRODUCT">
									<div class="p-t-10 p-l-140 block2-overlay trans-0-4 text-white">
										Available : <?php echo $row['avail']; ?>
										<div class="block2-btn-addcart w-size1">
											<!-- Button -->
											<button class="addtocart flex-c-m size1 bg4 bo-rad-23 hov1 s-text1" id='addtocart_<?php echo $row['id']; ?>' data-id='addtocart_<?php echo $row['id']; ?>'>
												Add to Cart
											</button>
										</div>
									</div>
								</div>
								<div class="block2-txt p-t-5 p-b-5">
									<a href="product-detail.php?commodityid=<?php echo $row['id']; ?>" class="block2-name dis-block s-text3">
										<?php echo  ucfirst($row['name']); ?>
									</a>
									<span class="block2-price m-text6 p-r-5">
										Rate: ₹ <span ><?php echo $row['price']; ?></span>
									</span>
									<div class="block2-price m-text6 p-r-5">
										Vendor:
										<a class="notranslate" href="profile.php?vendorid=<?php echo $row['vid']; ?>">
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
			</div>
			<?php
		}
		?>
	</div>
</section>

<?php require_once('footer.php'); ?>

<!--===============================================================================================-->
<script type="text/javascript" src="vendor/sweetalert/sweetalert.min.js"></script>
<script type="text/javascript">

	$(document).ready(function() {
		function addtocart_ajax(comid,value) {
    		// AJAX Request
    		$.ajax({
    			url: 'addtocart_ajax.php',
    			type: 'post',
    			data: {comid:comid,quantity:value},
    			dataType: 'json',
    			success: function(data){
    				var status = data['status'];
    				var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
    				$(this).on('click', function(){
    					swal(nameProduct, "is added to cart !", "success");
    				});
    				if(!status)
    					agalert("Cart Updated","Cart successfully updated","yellow");
    				else if(status==-1)
    					swal("Error while adding Commodity to cart","failure");
    				else if(status==1) {
    					$(".cartcount").text(parseInt($(".cartcount").text())+1);
    					swal("Successfully added Commodity to cart","success");
    				}
    			}
    		});
    	}
    	$(".productcartadd").click(function() {
    		var comid = "<?php echo $comid; ?>";
    		max = parseInt($(".num-product").attr("max"));
    		value = $(".num-product").val();
    		if(value>max) {
    			$(".num-product").val(max);
    			agalert("Failure","Maximum quantity for the commodity is "+max,"red");
    		}
    		else if(value<1) {
    			$(".num-product").val("1");
    			agalert("Failure","Minimum quantity for the commodity is 1","red");
    		}
    		else{
    			addtocart_ajax(comid,value);
    		}
    	});

    	$(".addtocart").click(function() {
            // Get element id by data-id attribute
            var el_id = $(this).data("id")

            // rating was selected by a user
            var split_id = el_id.split("_");
            var comid = split_id[1]; // postid
            var value = 1;

            addtocart_ajax(comid,value);
        });
    });
</script>
</body>
</html>