<?php
echo "hello from updatename video";
header("Content-Type: application/json; charset=UTF-8");
$commentob = json_decode($_POST["x"], false);

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
   
    $sql = "SELECT email,password FROM acount WHERE email='$commentob->email'  and password='$commentob->password'";
        $result = $conn->query($sql);
        $num_rows = mysqli_num_rows($result);
			if ($num_rows!=0) {
				
				//echo " exitst account";
                 $que= "INSERT INTO comment (
                                   content,
                                   email,
                                   timeup,
                                   linkimg  
                                   )
                      VALUES (
                             '$commentob->content',
                             '$commentob->email',
                             '$commentob->timeup',
                             '$commentob->linkimg'
                      )";
                if ($conn->query($que) === TRUE) {
                   //echo "Insert successfully";
                 } else {
                   //echo "Error insert record: " . $conn->error;
                 }

           }     
}
$conn->close();

?>