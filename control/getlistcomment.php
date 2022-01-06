<?php
require_once('../model/comment.php');
header("Content-Type: application/json; charset=UTF-8");
$linkimg = $_POST["x"];
$comment = new commentob();
$rsobj=$comment->getlistcomment($linkimg);
echo json_encode($rsobj);   
?>