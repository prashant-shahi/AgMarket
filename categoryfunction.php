<?php

function fetchCategoryTree($parent = 0, $spacing = '',  $user_tree_array = array()) {
 global $db;
  if (!is_array($user_tree_array))
    $user_tree_array = array();

  $sql = "SELECT `id`, `name`, `parentid` FROM `categories` WHERE 1 AND `parentid` = $parent ORDER BY id ASC";
  $query = mysqli_query($db, $sql);
  if (mysqli_num_rows($query) > 0) {
    while ($row = mysqli_fetch_assoc($query)) {
      $user_tree_array[] = array("id" => $row['id'], "name" => $spacing . ucfirst($row['name']));
      $user_tree_array = (array) fetchCategoryTree($row['id'], $spacing . '&nbsp;&nbsp;&nbsp;', $user_tree_array);
    }
  }
  return $user_tree_array;
}

function fetchCategoryTreeList($parent = 0, $user_tree_array = array()) {
  global $db;
    if (!is_array($user_tree_array))
    $user_tree_array = array();

  $sql = "SELECT `id`, `name`, `parentid` FROM `categories` WHERE 1 AND `parentid` = $parent ORDER BY id ASC";
  $query = mysqli_query($db, $sql);
  if (mysqli_num_rows($query) > 0) {
     $user_tree_array[] = "<ul>";
    while ($row = mysqli_fetch_assoc($query)) {
      if($row['parentid'] == 0) {
        $user_tree_array[] = "<li>". ucfirst($row['name']);
      }
      else {
        $user_tree_array[] = "<li>". ucfirst($row['name'])."</li>";
      }
      $user_tree_array = fetchCategoryTreeList($row['id'], $user_tree_array);
    }
  $user_tree_array[] = "</li>";
	$user_tree_array[] = "</ul>";
  }
  return $user_tree_array;
}
?>