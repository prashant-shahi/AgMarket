<?php
require_once('database.php');
require_once('server.php');

if(!isset($_SESSION['vendor']) || empty($_SESSION['vendor'])) {
	header("location: index.php?status=nosession");
	die();
}

$vid = $_SESSION['id'];

$res=mysqli_query($db, "SELECT lon, lat, place FROM vendors WHERE id=$vid");
if(!$res) {
	array_push($errors, mysqli_error($db));
}

if(mysqli_num_rows($res)>0) {
	$first = mysqli_fetch_assoc($res);
	$lon = $first['lon'];
	$lat = $first['lat'];
	$place = $first['place'];
}
else {
	array_push($errors, "Session Error ! Couldn't fetch vendor details.");
}

$counterrors = count($errors);

require_once('header.php');
include('errors.php');

if($counterrors!=0) {
	?>
	<section class="bg9 p-b-30">
		<div class="container">
			<h3 class="bg6 text-center p-t-15 p-b-15">Error occured while processing your request.</h3>
			<p class="text-center"><a href="index.php">Click here</a>, to go to Home Page</p>
		</div>
	</section>
	<?
}
else {
	$json  =  file_get_contents("./weatherIcons.json");
	$weatherIcons  =  json_decode($json);

	function geticonprefix($code) {
		global $weatherIcons;
		$prefix = 'wi wi-';
		$icon = $weatherIcons->$code->icon;
  // If we are not in the ranges mentioned above, add a day/night prefix.
		if (!($code > 699 && $code < 800) && !($code > 899 && $code < 1000)) {
			$icon = 'day-' . $icon;
		}
	// Finally tack on the prefix.
		$icon = $prefix . $icon;
		return $icon;
	}
	function k_to_c($temp) {
		if ( !is_numeric($temp) ) { return false; }
		return round(($temp - 273.15));
	}

// http://api.openweathermap.org/data/2.5/weather?id = 5128638&lang = en&units = metric&APPID = 3b3f916823675274f2fb80b7f4dd3d59";
	?>
	<div class = 'currentweather p-t-30 p-b-10'>
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-xl-12">
					<h2 class = "text-center">Current Weather</h2><br/>
				</div>
				<?php
//$url = "https://api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$lon&appid=3b3f916823675274f2fb80b7f4dd3d59";
				$url = "https://api.openweathermap.org/data/2.5/weather?q=yelahanka&appid=3b3f916823675274f2fb80b7f4dd3d59";

				$json  =  file_get_contents($url);
				$currentdata  =  json_decode($json);

		/*
			{"coord":{"lon":77.6,"lat":13.1},
			"weather":[
				{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}
			],
			"base":"stations",
			"main":{"temp":295.15,"pressure":1011,"humidity":100,"temp_min":295.15,"temp_max":295.15},
			"visibility":6000, "wind":{"speed":1},
			"clouds":{"all":40}, "dt":1526509800,
			"sys":{
				"type":1,"id":7823,"message":0.0039,"country":"IN",
				"sunrise":1526430221,"sunset":1526476105
				},
			"id":1252758,"name":"Yelahanka","cod":200}
		*/

//			$today  =  date("F j, Y, g:i a");
			$today = date("g:i:sa jS M, Y l");
			$cityname  =  $currentdata->name; 
			$weatherid = $currentdata->weather[0]->id;
			$weathermain = $currentdata->weather[0]->main;
			$weatherdescription = $currentdata->weather[0]->description;
			$pressure = $currentdata->main->pressure;
			$humidity = $currentdata->main->humidity;
			$temp_current = $currentdata->main->temp;
			$sunrise = new DateTime(date('r',$currentdata->sys->sunrise));
			$sunrise = $sunrise->format("g:i a");
			$sunset = new DateTime(date('r',$currentdata->sys->sunset));
			$sunset = $sunset->format("g:i a")
			?>
			<div class="p-t-10 p-b-10 col-xs-12 col-md-12 col-lg-12">
				<h3><?php echo $cityname . " - " .$today; ?></h3>
			</div>
			<div class="col-xs-12 col-md-4 col-lg-4">
				<?php
				echo '<span class="center"><i class="'.geticonprefix($currentdata->weather[0]->id).'" style="font-size:36px;"></i></span><br/>';
				echo "Weather Main: <span class='weathermain'>" . ucwords($weathermain). "</span><br/>";
				echo "Weather Description: <span class='weatherdesc'>" . ucwords($weatherdescription)."</span><br/>";
				?>
			</div>
			<div class="col-xs-12 col-md-4 col-lg-4">
				<?php
				echo "Current Temp: " . k_to_c($temp_current) ." <span class='notranslate'>&deg;C</span><br>";
				echo "Pressure: " . $pressure ." <span class='notranslate'>Pa</span><br>";
				echo "Humidity: " . $humidity ." %<br>";
				?>
			</div>
			<div class="col-xs-12 col-md-4 col-lg-4 notranslate">
				<?php
				echo "Sunrise: " . $sunrise ."<br>";
				echo "Sunset: " . $sunset ."<br>";
				?>
			</div>
		</div>
	</div>
</div>
<hr/>
<div class = 'weatherforecast p-b-30 p-t-20'>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-xl-12">
				<h2 class = "text-center">Weather Forecast</h2><br/>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-2 col-xl-2"></div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-xl-8" id="openweathermap-widget-21" style="overflow: scroll;">
			</div>
			<div class="col-xs-12 col-sm-12 col-md-2 col-xl-2"></div>
		</div>
	</div>
</div>
<?php 
}
?>

<!-- Footer -->
<footer class="bg6 p-t-30 p-b-45 p-l-45 p-r-45">
	<div class="flex-w p-b-10">
		<div class="col-sm-10 col-md-8 col-lg-6 w-size6 p-t-30 p-l-15 p-r-15 respon3">
			<h4 class="s-text12 p-b-30">
				Newsletter
			</h4>
			<form method="POST" action="">
				<div class="effect1 w-size9">
					<input class="s-text7 bg6 w-full p-b-5" type="email" name="newsletteremail" placeholder="email@example.com">
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
<script type="text/javascript" src="vendor/jquery/jquery-3.2.1.min.js"></script>
<?php
if(!$counterrors) {
	?>
	<script type="text/javascript">
		var cityid = 0;
		$.ajax({
			url: "https://api.openweathermap.org/data/2.5/weather?lat=<?php echo $lat; ?>&lon=<?php echo $lon; ?>&appid=3b3f916823675274f2fb80b7f4dd3d59",
			dataType: 'json',
			success: function(result){
				cityid = result["id"];
			}
		});
	</script>
	<script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>
	<script type="text/javascript">
		$(document).ready(function(){
			setTimeout(function() {
				window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
				window.myWidgetParam.push({id: 21,cityid: cityid, appid: '3b3f916823675274f2fb80b7f4dd3d59',units: 'metric',containerid: 'openweathermap-widget-21'});
				(function() {
					var script = document.createElement('script');
					script.async = true;
					script.charset = "utf-8";
					script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
					var s = document.getElementsByTagName('script')[0];
					s.parentNode.insertBefore(script, s);
				})();
			}, 700);
			$('#openweathermap-widget-21').bind('DOMNodeInserted', function(event) {
				$(".weather-left-card__number").addClass("notranslate");
				$(".widget-left-menu__links").remove();
			});
		});
	</script>
	<?php
	?>
	<?php
}
?>
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/bootstrap/js/popper.min.js"></script>
<script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script> 
<!--===============================================================================================-->
<script type="text/javascript" src="vendor/animsition/js/animsition.min.js"></script>
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
</body>
</html>