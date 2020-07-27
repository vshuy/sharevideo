<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);
//echo "fucking you huy brother fucking";
//echo $obj->email;
//echo $obj->password;

$servername = "localhost";
$username = "THANG";
$password = "password";
$dbname = "THANGDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else {
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
	    $a=$obj->email;
        $b=$obj->password;
        if($a == ""||$b == ""){
           //echo "người dùng đừng có chơi chó <br> các form không được trống ";
           echo "0";
        }else{
        $sql = "SELECT name FROM acount WHERE email='$a'  and password='$b'";
        $result = $conn->query($sql);
        ///////////////////////////////////////////////////////////////////////////////////////////// 
        if ($result->num_rows > 0) {
        	//echo "co ket qua";
              while($row = $result->fetch_assoc()) {
             //echo $row["name"];
                 $statuslog->set_name($row["name"]);
              }
              $statuslog->set_status("true");
              echo json_encode($statuslog)." ";
              
        } 
        else {
        	//echo "khong co ket qua";
        	
              $statuslog->set_status("false");
              echo json_encode($statuslog)." ";
              
        }
     } 
}
$conn->close();
?>