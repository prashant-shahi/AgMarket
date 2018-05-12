<?php
require_once('database.php');
require_once('server.php');

if(!isset($_SESSION['vendor']) || empty($_SESSION['vendor'])) {
	header('location:index.php');
}

require_once('header.php'); 
// call this file only after database connection
require_once 'categoryfunction.php';
require_once('errors.php');
?>
<section class="banner bgwhite" id="vendorstock">
	<!-- Title Page -->
	<section class="bg-title-page p-b-50 flex-col-c-m" style="background-image: url(https://i.imgur.com/HVNZcxb.jpg);">
		<h2 class="l-text2 t-center bg-info rounded p-t-5 p-b-5 p-l-5 p-r-5">
			Add Commodity for sale
		</h2>
	</section>
	<div class="container p-t-40 p-b-40">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3"></div>
			<form method="POST" action="" enctype="multipart/form-data" class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
				<div class="flex-sb-m p-b-12">
					Commodity Name <input type="text" name="name" placeholder="Commodity Name" required/>
				</div>
				<div class="flex-sb-m p-b-12">
					Available (KG/Entity) <input type="number" name="avail" min="1" value="1" required/>
				</div>
				<div class="flex-sb-m p-b-12">
					Rate (₹ per KG/Entity) <input type="number" name="price" min="1" value="1" required/>
				</div>

				<?php 
				$categoryList = fetchCategoryTree();
				?>
				<div class="rs2-select2 rs3-select2 rs4-select2 of-hidden w-size21 m-b-12">
					<select class="selection-2" name="categoryid" required>
						<option selected="true" disabled="disabled"  value="">Category</option>
						<?php foreach($categoryList as $cl) { ?>
						<option value="<?php echo $cl["id"] ?>"><?php echo ucfirst($cl["name"]); ?></option>
						<?php } ?>
					</select>
				</div>
				<div class="uploader" onclick="$('#filePhoto').click()">
					<div class="innerUploader">
						Select Image
						<img class="hidden" src="" />
						<input accept="image/*" type="file" name="img"  id="filePhoto" />
					</div>
				</div>
				<span class="s-text8 p-b-10">
					Please upload photos with same height and width.
				</span>
				<div class="size15 trans-0-4">
					<button type="submit" class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" name="addcommodity">Add to stock</button>
				</div>
			</form>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
			</div>
		</div>
	</section>
	<?php require 'footer.php'; ?>
	<!-- Container Selection -->
	<div id="dropDownSelect1"></div>

	<script type="text/javascript">
		$(".selection-1").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});

		var imageLoader = document.getElementById('filePhoto');
		imageLoader.addEventListener('change', handleImage, false);

		function handleImage(e) {
			var reader = new FileReader();
			reader.onload = function (event) {
				$('.innerUploader img').attr('src',event.target.result).removeClass("hidden" );
				$('.innerUploader img').css({'height': '300px', 'width': '300px' });
			}
			reader.readAsDataURL(e.target.files[0]);
		}
	</script>
</body>
</html>