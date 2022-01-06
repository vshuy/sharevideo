<?php
require_once('../model/video.php');
header("Content-Type: application/json; charset=UTF-8");
$email = $_POST["x"];
$video = new videoob();        
$rsobj = $video->getlistmanagevideo($email);
echo json_encode($rsobj);    
?>