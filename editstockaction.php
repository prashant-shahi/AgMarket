<?php if(isset($_POST['stock_id'])) :
			$db = mysqli_connect('localhost', 'root', '', 'project'); 

			$place = mysqli_real_escape_string($db, $_POST['place']);
			$stock_id = mysqli_real_escape_string($db, $_POST['stock_id']);
			$cropname = mysqli_real_escape_string($db, $_POST['cropname']);
			$kgavail = mysqli_real_escape_string($db, $_POST['kgavail']);
			$costpk = mysqli_real_escape_string($db, $_POST['costpk']);

			mysqli_query($db, "UPDATE stocks SET place='$place', cropname='$cropname', kgavail='$kgavail',costpk='$costpk' WHERE stock_id='$stock_id'");
			header('location:index1.php');
			die();
?>
<?php else :
	echo '<script>alert("Error Occured, Go Back and Try again..</h4><br/>");</script>';
	header('location:index1.php');
?>
<?php endif; ?>
