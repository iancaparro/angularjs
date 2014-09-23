<?php 
require_once '../includes/db.php';

$schoolid = '';
if(isset($_GET['schoolid'])){
	$schoolid = $_GET['schoolid'];
}

$query = "select id, name, abb, status from schools where id=" . $schoolid;
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$row = null;
if($result->num_rows > 0) {
	$row = $result->fetch_assoc();
}

echo $json_response = json_encode($row);
