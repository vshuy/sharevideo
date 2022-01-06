<?php
include "../model/video.php";
header("Content-Type: application/json; charset=UTF-8");
$video = new videoob();
$rsobj = $video->getlistvideo();
echo json_encode($rsobj);
?>