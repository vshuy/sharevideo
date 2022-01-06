<?php
include "../model/user.php";
header("Content-Type: application/json; charset=UTF-8");
$usernameupdate = json_decode(file_get_contents('php://input'), true);
$user = new userob($usernameupdate["email"],$usernameupdate["password"]);
if($user->checkuser()==true){
if($user->updatename($usernameupdate["newname"])==true){
  echo "true";
}else{
  echo "false";
}
}
else{
  echo "false";
}
?>