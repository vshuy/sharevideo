<?php
//echo "hello from deletevideo";
header("Content-Type: application/json; charset=UTF-8");
$videodelete = json_decode($_POST["x"], false);

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
    //echo "run in serve";
    //echo " email is ".$videodelete->email;
    //echo " password is ".$videodelete->password;
    //echo " link img is  ".$videodelete->linkimg;
    $sql = "SELECT email,password FROM acount WHERE email='$videodelete->email'  and password='$videodelete->password'";
        $result = $conn->query($sql);
        $num_rows = mysqli_num_rows($result);
			if ($num_rows!=0) {
				//echo " exitst account";


				$sql = "DELETE FROM comment WHERE linkimg='$videodelete->linkimg'";
                if ($conn->query($sql) === TRUE) {
                   //echo "Record comment of video deleted successfully";
                 } else {
                   //echo "Error deleting comment record: " . $conn->error;
                 } 
                 
                $sql = "DELETE FROM video WHERE email='$videodelete->email'  and linkimg='$videodelete->linkimg'";
                if ($conn->query($sql) === TRUE) {
                	$tmplinkimg = $videodelete->linkimg;
                    $tmplinkvideo = str_replace(".png", ".mp4",$tmplinkimg);
                    $linkimg = "/var/www/cauhinh/thang/model/uploads/image/".$tmplinkimg;
                    $linkvideo = "/var/www/cauhinh/thang/model/uploads/video/".$tmplinkvideo;
                    //echo "linkimg is :".$linkimg;
                    //echo " linkvideo is :".$linkvideo;
                    unlink($linkimg);
                    unlink($linkvideo);
                   //echo "Record deleted successfully";
                 } else {
                   //echo "Error deleting record: " . $conn->error;
                 }
           }     
}
$conn->close();

?>