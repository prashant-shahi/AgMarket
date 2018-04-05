<?php
require('database.php'); 
require('header.php');
?>

<!-- Title Page -->
<section class="bg-title-page p-t-40 p-b-50 flex-col-c-m" style="background-image: url(images/heading-pages-01.jpg);">
	<h2 class="l-text2 t-center">
		Cart
	</h2>
</section>

<!-- Cart -->
<section class="cart bgwhite p-t-70 p-b-100">
	<div class="container">
		<?php
		if(isset($_GET['status']) and !empty($_GET['status'])) {
			$str = "added";
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
		if(isset($str))
		{
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
		mysqli_query($db,"SET @count:=0");
		$res = mysqli_query($db, "SELECT (@count:=@count+1) AS sn, c.name as commodity, avail, v.name as vendor, quantity, price,(quantity*price) as total FROM cart as cr,commodities as c,vendors as v WHERE uid=1 and cr.cid=c.id and c.vid=v.id") or die (mysqli_error($db));

		if (mysqli_num_rows($res) <= 0) {
			?>
			<h2 class="center">Sack is empty ! <br/><a href="index.php" alt="AgMarket Home Page" style="text-decoration: none;">Browse and Add commodities in the sack !!</a></h2>
			<?php
		}
		else {
			?>
			<div class="row">
				<!-- Cart item -->
				<div class="container-table-cart pos-relative col-xs-12 col-sm-12 col-md-8">
					<div class="wrap-table-shopping-cart bgwhite">
						<table class="table-shopping-cart">
							<tr class="table-head">
								<th class="column-1">S.NO</th>
								<th class="column-2">Commodity Name</th>
								<th class="column-3">Vendor Name</th>
								<th class="column-4">Rate (₹ per KG/Entity)</th>
								<th class="column-5 p-l-70">Quantity (KG/Entity)</th>
								<th class="column-6">Price</th>
								<th class="column-7"></th>
							</tr>
							<?php
							$gtotal = 0;
							while($row = mysqli_fetch_assoc($res)) {
								$total = 0;
								$i = $row["sn"];
								$j = $i - 1;
								?>
								<tr class="table-row">
									<td class="column-1"><?php echo $i; ?></td>
									<td class="column-2"><?php // Pachi Photo Rakhne eta ?><?php echo $row["commodity"]; ?></td>
									<td class="column-3"><?php echo $row["vendor"]; ?></td>
									<td class="column-4">
										<strong class="price" id="<?php echo $j.'-price'; ?>">
											<?php echo $row["price"]; ?>
										</strong>
									</td>
									<td class="column-5">
										<i name="" class="fa fa-plus-square" style="font-size:36px;"></i>
										<input type="number" class="quantity size8 m-text18 t-center num-product" min="1" max="<?php echo $row["avail"]; ?>" value="<?php echo $row["quantity"]; ?>" />
										<i name="" class="fa fa-minus-square" style="font-size:36px;"></i>
									</td>
									<td class="column-6">
										<strong class="total" id="<?php echo $j.'-total'; ?>">
											<?php
											$total = $row["total"];
											$gtotal += $total;
											echo $total;
											?>
										</strong>
									</td>
									<td class="column-7">
										<a href="cart.php?remove=<?php echo $row['sn']; ?>">
											<i class="fa fa-trash-o" style="font-size:36px"></i>
										</a>
									</td>
								</tr>
								<?php
							}
							?>
						</table>
						<?php
					}
					mysqli_close($db);
					?>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4">
				<!-- Total -->
				<div class="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
					<h5 class="m-text20 p-b-24">
						Cart Totals
					</h5>

					<!--  -->
					<div class="flex-w flex-sb-m p-b-12">
						<span class="s-text18 w-size19 w-full-sm">
							Subtotal:
						</span>

						<span class="m-text21 w-size20 w-full-sm">
							$39.00
						</span>
					</div>

					<!--  -->
					<div class="flex-w flex-sb bo10 p-t-15 p-b-20">
						<span class="s-text18 w-size19 w-full-sm">
							Shipping:
						</span>

						<div class="w-size20 w-full-sm">
							<p class="s-text8 p-b-23">
								The above cost is exclusive of the shipping cost. Vendor will the shipping cost with you before 
							</p>

							<span class="s-text19">
								Calculate Shipping
							</span>

							<div class="rs2-select2 rs3-select2 rs4-select2 bo4 of-hidden w-size21 m-t-8 m-b-12">
								<select class="selection-2" name="country">
									<option>Select a country...</option>
									<option>US</option>
									<option>UK</option>
									<option>India</option>
								</select>
							</div>

							<div class="size13 bo4 m-b-12">
								<input class="sizefull s-text7 p-l-15 p-r-15" type="text" name="state" placeholder="State /  country">
							</div>

							<div class="size13 bo4 m-b-22">
								<input class="sizefull s-text7 p-l-15 p-r-15" type="text" name="postcode" placeholder="Postcode / Zip">
							</div>

							<div class="size14 trans-0-4 m-b-10">
								<!-- Button -->
								<button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
									Update Totals
								</button>
							</div>
						</div>
					</div>

					<!--  -->
					<div class="flex-w flex-sb-m p-t-26 p-b-30">
						<span class="m-text22 w-size19 w-full-sm">
							Total:
						</span>

						<span class="m-text21 w-size20 w-full-sm">
							$39.00
						</span>
					</div>

					<div class="size15 trans-0-4">
						<!-- Button -->
						<button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
							Proceed to Checkout
						</button>
					</div>
				</div>
			</div>
		</div>		
	</div>
</section>

<?php require('footer.php'); ?>
<!-- Container Selection -->
<div id="dropDownSelect1"></div>
<div id="dropDownSelect2"></div>


<!--===============================================================================================-->
<script type="text/javascript" src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/bootstrap/js/popper.js"></script>
<script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/select2/select2.min.js"></script>
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js "></script>
<!--=============================================================================================== -->
<script>
		// we used jQuery 'keyup' to trigger the computation as the user type
		$('.quantity').keyup(function () {
			cartUpdate();
		});

		var cartUpdate = function() {
			// initialize the sum (total price) to zero
			var total = 0;
			var sum = 0;			    
		    // we use jQuery each() to loop through all the textbox with 'price' class
		    // and compute the sum for each loop
		    $('.quantity').each(function(index) {
		    	quantity=$(this).val();
		    	sum = Number($("#"+index+"-price").html())*Number(quantity);
		    	$("#"+index+"-total").html(sum.toString());
		    }); 

		    $('.total').each(function(index) {
		    	total += Number($(this).html());
				// set the computed value to 'totalPrice' textbox
				$('#totalPrice').html(total.toString());
			});
		}
	</script> 
	<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
</html>