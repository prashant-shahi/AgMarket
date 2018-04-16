<?php
if(isset($errors) && count($errors) > 0) {
	foreach ($errors as $error) {
		?>
		<div class="alert failure">
			<span class="closebtn">&times;</span> 
			<strong>Error : <?php echo $error; ?></strong>
		</div>
	<?php
	}
	$errors = array();
}
if(isset($success) && count($success) > 0) {
	foreach ($success as $succ) {
		?>
		<div class="alert success">
			<span class="closebtn">&times;</span> 
			<strong>Success : <?php echo $succ; ?></strong>
		</div>
	<?php
	}
	$success = array();
}
?>