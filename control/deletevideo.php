<?php
require_once('../model/comment.php');
require_once('../model/user.php');
require_once('../model/video.php');
header("Content-Type: application/json; charset=UTF-8");
$videodelete = json_decode(file_get_contents('php://input'), true);
$user = new userob($videodelete["email"],$videodelete["password"]);
if($user->checkuser()==true){
  $comment = new commentob();
  if($comment->deleteallcommentofavideo($videodelete["linkimg"])==true){
     $video = new videoob();
	if($video->deletevideo($videodelete["email"],$videodelete["linkimg"])==true){
		echo "true";
	}
	else {
		echo "false";
	} 
  }
  else{
  	echo "false";
  }
}else{
  echo "false";
}
?>