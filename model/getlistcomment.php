<?php
class commentob {
    public $idcomment;
    public $content;
    public $email;
    public $timeup;
    public $linkimg;
    
    function __construct() {
       $this->idcomment= array();
       $this->content = array();
       $this->email = array();
       $this->timeup = array();
       $this->linkimg = array();
      
    }
    function add_note($idcomment,$content,$email,$timeup,$linkimg) {
       array_push($this->idcomment,$idcomment); 
       array_push($this->content,$content);
       array_push($this->email,$email);
       array_push($this->timeup,$timeup);
       array_push($this->linkimg,$linkimg);     
    }
}
header("Content-Type: application/json; charset=UTF-8");

$linkimg = $_POST["x"];

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
   
	//echo "hello from mange view ".$email; 
	
       $sql = "SELECT  *  FROM comment WHERE linkimg='$linkimg'";
       $result = $conn->query($sql);
       $rsobj = new commentob();
       if ($result->num_rows > 0) {
      // output data of each row
         while($row = $result->fetch_assoc()) {
           //echo $row["name"]. " ".$row["linkimg"] ;
           //array_push($listimg,$row["linkimg"]);
           $rsobj->add_note($row["id"],$row["content"],$row["email"],$row["timeup"],$row["linkimg"]);
         }
         echo json_encode($rsobj)." ";
       } 
       else {
         //echo "0 results";
       }
	
    
}
$conn->close();
?>