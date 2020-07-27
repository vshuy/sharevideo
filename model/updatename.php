<?php
echo "hello from updatename video";
header("Content-Type: application/json; charset=UTF-8");
$videoupdate = json_decode($_POST["x"], false);

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
   // echo "run in serve";
   // echo " email is ".$videoupdate->email;
   // echo " password is ".$videoupdate->password;
   // echo " link img is  ".$videoupdate->linkimg;
   // echo " new name video is  ".$videoupdate->newname;
    $sql = "SELECT email,password FROM acount WHERE email='$videoupdate->email'  and password='$videoupdate->password'";
        $result = $conn->query($sql);
        $num_rows = mysqli_num_rows($result);
			if ($num_rows!=0) {
				
				//echo " exitst account";
                $sql = "UPDATE video SET name='$videoupdate->newname' WHERE email='$videoupdate->email'  and linkimg='$videoupdate->linkimg'";
                if ($conn->query($sql) === TRUE) {
                   //echo "Record update successfully";
                 } else {
                   //echo "Error update record: " . $conn->error;
                 }

           }     
}
$conn->close();

?>