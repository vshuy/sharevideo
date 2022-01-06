<?php
include "../model/user.php";
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode(file_get_contents('php://input'), true);
$lu=strlen($obj["email"]);
$lp=strlen($obj["password"]);
if($lu!=0 and $lu <15 and $lp !=0 and $lp < 15){
  $user = new userob($obj["email"],$obj["password"]);
  if($user->register($obj["name"])==true){
       echo "true";      
  }
  else{
       echo "false";
  }  
}
else {
    echo "false";
}

?>

