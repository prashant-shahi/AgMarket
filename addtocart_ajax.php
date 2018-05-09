<?php
session_start();
require_once("database.php");

$uid = $_SESSION['id']; // User id
$comid = $_POST['comid']; // Commoditity id
$quantity = $_POST['quantity'];

// Check entry within table
$query = "SELECT COUNT(*) AS cntcomm FROM cart WHERE cid=$comid and uid=$uid";
$result = mysqli_query($db,$query);
$fetchdata = mysqli_fetch_array($result);
$count = $fetchdata['cntcomm'];

if($count <= 0){
	$insertquery = "INSERT INTO cart(uid,cid,quantity) values($uid,$comid,$quantity)";
	$res = mysqli_query($db,$insertquery);
	if(!$res)
		$status = -1;
	else
		$status = 1;
}
else {
	$updatequery = "UPDATE cart set quantity=$quantity where uid=$uid and cid=$comid";
	$res = mysqli_query($db,$updatequery);
	if(!$res)
		$status = -1;
	else
		$status = 0;
}

$return_arr = array("status"=>$status);

echo json_encode($return_arr);

?>