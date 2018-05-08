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
    $user_tree_array[] = "<ul class='p-t-3'>";
    while ($row = mysqli_fetch_assoc($query)) {
      if($row['parentid']=="0") {
        $user_tree_array[] = "<li><a href='product.php?categoryid={$row['id']}'>". ucfirst($row['name'])."</a></li>";  
      }
      else {
        $user_tree_array[] = "<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='product.php?categoryid={$row['id']}'>". ucfirst($row['name'])."</a></li>";
      }
      $user_tree_array = fetchCategoryTreeList($row['id'], $user_tree_array);
    }
    $user_tree_array[] = "</ul>";
  }
  return $user_tree_array;
}

function fetchCategoryComma($child = 0, $user_tree_array = array()) {
  global $db;
  if (!is_array($user_tree_array))
    $user_tree_array = array();

  $sql = "SELECT `id`, `name`, `parentid` FROM `categories` WHERE 1 AND `id` = $child ORDER BY id ASC";
  $query = mysqli_query($db, $sql);
  if (mysqli_num_rows($query) > 0) {
    while ($row = mysqli_fetch_assoc($query)) {
      $user_tree_array[] = ucwords($row['name']);
      $user_tree_array = fetchCategoryComma($row['parentid'], $user_tree_array);
    }
  }
  return $user_tree_array;
}

function fetchCategorySibling($child = 0, $user_tree_array = array()) {
  global $db;
  if (!is_array($user_tree_array))
    $user_tree_array = array();

  $sql = "SELECT `id`, `name`, `parentid` FROM `categories` WHERE 1 AND `id` = $child ORDER BY id ASC";
  $query = mysqli_query($db, $sql);
  $first = mysqli_fetch_assoc($query);
  $parent = $first['parentid'];

  $sql = "SELECT `id`, `name`, `parentid` FROM `categories` WHERE 1 AND `parentid` = $parent ORDER BY id ASC";
  $query = mysqli_query($db, $sql);
  if (mysqli_num_rows($query) > 0) {
    while ($row = mysqli_fetch_assoc($query)) {
        $user_tree_array[] = $row['id'];
    }
  }
  return $user_tree_array;
}

function fetchCategoryChildren($parent = 0, $user_tree_array = array()) {
  global $db;
  if (!is_array($user_tree_array))
    $user_tree_array = array();

  $sql = "SELECT `id`, `name`, `parentid` FROM `categories` WHERE 1 AND `parentid` = $parent ORDER BY id ASC";
  $query = mysqli_query($db, $sql);
  if (mysqli_num_rows($query) > 0) {
    while ($row = mysqli_fetch_assoc($query)) {
        $user_tree_array[] = $row['id'];
        $user_tree_array = fetchCategoryChildren($row['id'], $user_tree_array);
    }
  }
  return $user_tree_array;
}
?>