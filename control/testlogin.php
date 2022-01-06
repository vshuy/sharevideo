<?php
include "../model/user.php";
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode(file_get_contents('php://input'), true);
$user = new userob($obj["email"],$obj["password"]);
class statuslogin {
            public $name;
            public $status;
            function set_name($name) {
            $this->name = $name;
            }
            function set_status($status) {
            $this->status = $status;
            }
        }
$statuslog= new statuslogin();
if($user->checkuser()==true){
        //echo "success";
       $statuslog->set_name($user->getname());
       $statuslog->set_status("true");
       echo json_encode($statuslog);
       
}
else{
         //echo "failse";
       $statuslog->set_name("");
       $statuslog->set_status("false");
       echo json_encode($statuslog);
}
?>