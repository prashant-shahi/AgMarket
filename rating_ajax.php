<?php
session_start();
include "database.php";

$uid = $_SESSION['id']; // User id
$vid = $_POST['vid'];
$rating = $_POST['rating'];

// Check entry within table
$query = "SELECT COUNT(*) AS cntpost FROM rating WHERE vid=$vid and uid=$uid";

$result = mysqli_query($db,$query);
$fetchdata = mysqli_fetch_array($result);
$count = $fetchdata['cntpost'];

if($count == 0){
 $insertquery = "INSERT INTO rating(uid,vid,rating) values($uid,$vid,$rating)";
 mysqli_query($db,$insertquery);
}
else {
 $updatequery = "UPDATE rating SET rating=$rating WHERE uid=$uid and vid=$vid";
 mysqli_query($db,$updatequery);
}

// get average
$query = "SELECT ROUND(AVG(rating),1) as averageRating FROM rating WHERE vid=$vid";
$result = mysqli_query($db,$query) or die(mysqli_error());
$fetchAverage = mysqli_fetch_array($result);
$averageRating = $fetchAverage['averageRating'];

$return_arr = array("averageRating"=>$averageRating);

echo json_encode($return_arr);

?>