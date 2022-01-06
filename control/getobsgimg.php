<?php
include "../model/video.php";
header("Content-Type: application/json; charset=UTF-8");
$category = $_POST["x"];    
$video = new videoob();
$rsobj = $video->getlistsgvideo($category);
echo json_encode($rsobj);
?>