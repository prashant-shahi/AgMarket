<html>
<body>
	<?php
	if(isset($_POST['name'])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$location = $_POST['location'];

		foreach( $name as $key => $n ) {
			print "The name is ".$n.", email is ".$email[$key].
			", and location is ".$location[$key].". Thank you<br/>";
		}
	}
	else {
		?>
		<form method="POST" action="">
			<?php
			for($i=0;$i<5;$i++) {
				?>
				<label>Name: </label><input type="text" name="name[]" /><br/>
				<label>Email: </label><input type="text" name="email[]" /><br/>
				<br/>
				<?php
			}
			?>
			<input type="submit" name=".." value="SUBMIT" />
		</form>
		<?php
	}
	?>
</body>
</html>

<!-- 

if(isset($_POST['cartid']) && isset($_POST['quantity']))
{
	$cartid = $_POST['cartid'];
	$quantity = $_POST['quantity'];

// UPDATE SQL QUERY
	$usql = "UPDATE cart SET quantity = (case ";

	foreach( $cartid as $key => $n ) {
		$usql += "when id = '$n' then '".$quantity['n']."' ";
	}
	$usql += "end) WHERE id in (";
	foreach( $cartid as $key => $n ) {
		$usql += "'$n',";
	}
	rtrim($usql,','); 	// Remove last character of the string
	$usql += ");";
	echo "<script>alert('" .$usql. "');</script>";
}

-->