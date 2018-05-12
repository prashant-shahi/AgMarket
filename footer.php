<!-- Footer -->
<footer class="bg6 p-t-30 p-b-45 p-l-45 p-r-45">
	<div class="flex-w p-b-10">
		<div class="col-sm-10 col-md-8 col-lg-6 w-size6 p-t-30 p-l-15 p-r-15 respon3">
			<h4 class="s-text12 p-b-30">
				Newsletter
			</h4>
			<form>
				<div class="effect1 w-size9">
					<input class="s-text7 bg6 w-full p-b-5" type="text" name="email" placeholder="email@example.com">
					<span class="effect1-line"></span>
				</div>
				<div class="w-size2 p-t-20">
					<!-- Button -->
					<button class="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
						Subscribe
					</button>
				</div>
			</form>
		</div>
		<div class="col-sm-10 col-md-8 col-lg-6 w-size6 p-t-30 p-l-15 p-r-15 respon3">
			<h4 class="s-text12 p-b-30">
				GET IN TOUCH
			</h4>
			<div>
				<p class="s-text7 w-size27">
					Any questions? Let us know !!
				</p>

				<div class="flex-m p-t-30">
					<a href="https://fb.me/in.AgMarket" class="fs-18 color1 p-r-20 fa fa-facebook"></a>
					<a href="https://www.instagram.com/agmarket.in" class="fs-18 color1 p-r-20 fa fa-instagram"></a>
					<a href="https://twitter.com/AgMarket_in" class="fs-18 color1 p-r-20 fa fa-twitter"></a>
				</div>
			</div>
		</div>
	</div>
</footer>
<!-- Google Translate -->
<div class="gTranslate" id="google_translate_element"></div>

<!-- Back to top -->
<div id="myBtn" class="btn-back-to-top bg0-hov">
	<span class="symbol-btn-back-to-top">
		<i class="fa fa-angle-double-up" aria-hidden="true"></i>
	</span>
</div>

<!--===============================================================================================-->
<script type="text/javascript" src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="slick2/slick2.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/alert/jAlert-v3.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/jquery-bar-rating/dist/jquery.barrating.min.js"></script>
<!--===============================================================================================-->
<script>
	function agalert(title,content,theme,image){
		//e.preventDefault();
		// theme = "red";
		$.jAlert({
			'title': title,
			'content': content,
			'theme': theme,
			'closeOnClick': true,
			'backgroundColor': 'black',
		});
	}
	function agzoom(image,iw) {
		$.jAlert({
			'fullscreen': true,
			'image': image
		});
	}
</script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/bootstrap/js/popper.min.js"></script>
<script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script> 
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/select2/select2.min.js"></script>
<script type="text/javascript">
	$(".selection-1").select2({
		minimumResultsForSearch: 20,
		dropdownParent: $('#dropDownSelect1')
	});
</script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/slick/slick.min.js"></script>
<script type="text/javascript" src="js/slick-custom.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/countdowntime/countdowntime.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/lightbox2/js/lightbox.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/sweetalert/sweetalert.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript" src="js/main.min.js"></script>
<!--===============================================================================================-->
<script type="text/javascript">
	function googleTranslateElementInit() {
		new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'kn,te,ta,en,hi,ne', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true, gaId: 'UA-116535819-1'}, 'google_translate_element');
	}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<script type="text/javascript">
	$(document).ready(function(){
		$('#google_translate_element').bind('DOMNodeInserted', function(event) {
			$('.goog-te-menu-value span:first').html('Translate');
			$('.goog-te-menu-frame.skiptranslate').on("load", function(){
				setTimeout(function(){
					$('.goog-te-menu-frame.skiptranslate').contents().find('.goog-te-menu2-item-selected .text').html('Translate');    
				}, 100);
			});
		});
	});
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-116535819-1"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'UA-116535819-1');
</script>