<?php
require_once('database.php');
require_once('server.php');
require_once('session-redirect.php');

if(isset($_GET['remove']) && !empty($_GET['remove'])) {
	$res = mysqli_query($db, "DELETE FROM commodities where id={$_GET['remove']} and vid={$_SESSION['id']}");
	echo "Affected rows: " . mysqli_affected_rows($db);
	if(mysqli_affected_rows($db)==1) {
		array_push($success,"Success: Successfully deleted the commodity");
	}
	else {
		array_push($errors,"Error: Failed to delete the commodity with id {$_GET['remove']}");
	}
}

require('header.php'); 
include('errors.php');
?>

<?php
mysqli_query($db,"SET @count:=0");
$res = mysqli_query($db, "select (@count:=@count+1) as sn, com.id as id, com.name as name, cat.name as category, avail, price, catid, image_url from commodities as com, categories as cat where cat.id=com.catid and vid='".$_SESSION['id']."'");
if(!$res) {
	array_push($err, mysqli_error($db));
}
?>

<!-- Title Page -->
<section class="bg-title-page p-t-40 p-b-50 flex-col-c-m" style="background-image: url(images/heading-pages-01.jpg);">
	<h2 class="l-text2 t-center">
		List of your commoditites
	</h2>
</section>

<?php
if(mysqli_num_rows($res) <= 0) {
	?>
	<section class="bgwhite text-center p-t-30 p-b-30">
		<div class="container">
			<h3 class="center">Stock is empty ! <br/><a href="addcommodity.php" alt="AgMarket Home Page" style="text-decoration: underline;">Add commodities !!</a></h3>
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
								<th class="column-2" colspan="2">Commodity Name</th>
								<th class="column-3">Available (KG/Entity)</th>
								<th class="column-4">Rate (₹ per KG/Entity)</th>
								<th class="column-5">Categories</th>
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
										<?php echo $row["name"]; ?>
									</td>
									<td class="column-3"><?php echo $row["avail"]; ?></td>
									<td class="column-4 notranslate">
										<?php echo $row["price"]; ?>
									</td>
									<td class="column-5 notranslate">
										<?php echo $row["category"]; ?>
									</td>
									<td>
										<a href="update-vendor-stock.php?update=<?php echo $row['id']; ?>">
											<i class="fa fa-edit" style="font-size:36px"></i>
										</a>
									</td>
									<td>
										<a href="vendor-index.php?remove=<?php echo $row['id']; ?>">
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
		</section>
		<?php
	}
	?>
	<hr/>
	<section class="banner bgwhite p-t-10 p-b-10">
		<div class="sec-title p-b-10">
			<h3 class="m-text5 t-center">
				Features of our application
			</h3>
		</div>
		<!-- Slide1 -->
		<section class="slide1">
			<div class="wrap-slick1">
				<div class="slick1">
					<div class="item-slick1 item1-slick1" style="background-image: url(images/master-slide-02.jpg);">
						<div class="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
							<span class="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
								Use our android app for easy 
							</span>

							<h2 class="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
								Android App
							</h2>
						</div>
					</div>

					<div class="item-slick1 item2-slick1" style="background-image: url(images/master-slide-03.jpg);">
						<div class="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
							<span class="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="rollIn">
								Use this application in your own lanuage
							</span>
							<h2 class="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="lightSpeedIn">
								Native Language
							</h2>
						</div>
					</div>

					<div class="item-slick1 item3-slick1" style="background-image: url(images/master-slide-04.jpg);">
						<div class="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
							<span class="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="rotateInDownLeft">
								Know the predictions of weather
							</span>
							<h2 class="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="rotateInUpRight">
								Weather Utilities
							</h2> 
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>
	<hr/>
	<!-- Shipping -->
	<div class="sec-title p-b-10">
		<h4 class="m-text5 t-center">
			Benefits for customers
		</h4>
	</div>
	<section class="shipping bgwhite p-t-15 p-b-15">
		<div class="flex-w p-l-15 p-r-15">
			<div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
				<h4 class="m-text12 t-center">
					Never be at loss
				</h4>
				<span class="s-text11 t-center">
					Compare rates from different vendors
				</span>
			</div>

			<div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2">
				<h4 class="m-text12 t-center">
					Delivery or Pick-up
				</h4>

				<span class="s-text11 t-center">
					Simply select option for either delivery or pick-up while ordering
				</span>
			</div>

			<div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
				<h4 class="m-text12 t-center">
					Place Order anytime
				</h4>

				<span class="s-text11 t-center">
					Our site is 24/7 available for your service
				</span>
			</div>
		</div>
	</section>

	<?php require('footer.php'); ?>
</body>
</html>