<?php
//echo "hello from deletevideo";
header("Content-Type: application/json; charset=UTF-8");
$commentdelete = json_decode($_POST["x"], false);

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
    
    $sql = "SELECT email,password FROM acount WHERE email='$commentdelete->email'  and password='$commentdelete->password'";
        $result = $conn->query($sql);
        $num_rows = mysqli_num_rows($result);
			if ($num_rows!=0) {
				//echo " exitst account";
                $sql = "DELETE FROM comment WHERE id='$commentdelete->id'";
                if ($conn->query($sql) === TRUE) {
                   //echo "Record deleted successfully";
                 } else {
                   //echo "Error deleting record: " . $conn->error;
                 }
           }     
}
$conn->close();

?>