<?php
require_once('../model/comment.php');
require_once('../model/user.php');
header("Content-Type: application/json; charset=UTF-8");
$datacommentob = json_decode(file_get_contents('php://input'), true);
$user = new userob($datacommentob["email"],$datacommentob["password"]);
if($user->checkuser()==true){
  $comment = new commentob();
  if($comment->insertcomment($datacommentob["content"],$datacommentob["email"],$datacommentob["timeup"],$datacommentob["linkimg"])==true){
      echo "true";
  }
  else{
  	echo "false";
  }
}else{
  echo "false";
}
?>