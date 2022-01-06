<?php
require_once('../model/video.php');
header("Content-Type: application/json; charset=UTF-8");
$linkimg = $_POST["x"];
$video = new videoob();
if($video->updateview($linkimg)==true){
    echo "1";
}
else {
    echo "0";
}
?>