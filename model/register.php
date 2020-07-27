
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
$a=$obj->email;
$b=$obj->password;
$uname=$obj->name;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else{
  
     // echo "run in here";
        if($a == ""||$b == ""){
           //echo "người dùng đừng có chơi chó <br> các form không được trống ";
           echo "0";
        }else{
        $sql = "SELECT email FROM acount WHERE email='$a'";
        $result = $conn->query($sql);
        $num_rows = mysqli_num_rows($result);
        //echo $num_rows;
      if ($num_rows==0) {
            $que= "INSERT INTO acount (
                                   name,
                                   email,
                                   password
                                   )
                      VALUES (
                             '$uname',
                             '$a',
                             '$b'
                      )";
        if ($conn->query($que) === TRUE) {
                     //echo "Tài khoản đã được tạo thành công ";
                     echo "1";
                }
                else{
                  //echo "orrcude a error while insert database";
                  echo "0";
                }
           } 
           else{
                //echo "email này  đã có người dùng  không thể tạo tài khoản ";
                echo "0";
           }
      }
  

}
$conn->close();

?>

