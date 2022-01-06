<?php
include "../model/user.php";
header("Content-Type: application/json; charset=UTF-8");
$passwordupdate = json_decode(file_get_contents('php://input'), true);
$user = new userob($passwordupdate["email"],$passwordupdate["password"]);
if($user->checkuser()==true){
if($user->updatepassword($passwordupdate["newpassword"])==true){
  echo "true";
}else{
  echo "false";
}
}
else{
  echo "false";
}
?>