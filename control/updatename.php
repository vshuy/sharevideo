<?php
require_once('../model/video.php');
require_once('../model/user.php');
header("Content-Type: application/json; charset=UTF-8");
$videoupdate = json_decode(file_get_contents('php://input'), true);
$user = new userob($videoupdate["email"],$videoupdate["password"]);
if($user->checkuser()==true){
      $video = new videoob();      
      if($video->renamevideo($videoupdate["newname"],$videoupdate["email"],$videoupdate["linkimg"])==true){
       echo "true";
      }
      else{
      	echo "false";
      }                          
}
else{
     echo "false";      
}
?>