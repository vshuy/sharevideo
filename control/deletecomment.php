<?php
require_once('../model/comment.php');
require_once('../model/user.php');
header("Content-Type: application/json; charset=UTF-8");
$commentdelete = json_decode(file_get_contents('php://input'), true);
$user = new userob($commentdelete["email"],$commentdelete["password"]);
if($user->checkuser()==true){
  $comment = new commentob();
  if($comment->deletecomment($commentdelete["id"])==true){
      echo "true";
  }
  else{
  	echo "false";
  }
}else{
  echo "false";
}
?>