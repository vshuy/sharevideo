<?php
class imgob {
    public $namevd;
    public $userup;
    public $timeup;
    public $views;
    public $category;
    public $linkimg;
    
    function __construct() {
       $this->namevd = array();
       $this->userup = array();
       $this->timeup = array();
       $this->views = array();
       $this->category = array();
       $this->linkimg = array();
      
    }
    function add_note($namevd,$userup,$timeup,$views,$category,$linkimg) {
       array_push($this->namevd,$namevd);
       array_push($this->userup,$userup);
       array_push($this->timeup,$timeup);
       array_push($this->views,$views);
       array_push($this->category,$category);
       array_push($this->linkimg,$linkimg);     
    }
}

header("Content-Type: application/json; charset=UTF-8");
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
    $category = $_POST["x"];    
    

   $sql = "SELECT  name,email,timeup,views,category,linkimg  FROM video WHERE category='$category'";
   $result = $conn->query($sql);
  // $listimg = array(); 
   $rsobj = new imgob();
    if ($result->num_rows > 0) {
    // output data of each row
        while($row = $result->fetch_assoc()) {
           //echo $row["name"]. " ".$row["linkimg"] ;
           //array_push($listimg,$row["linkimg"]);
           $rsobj->add_note($row["name"],$row["email"],$row["timeup"],$row["views"],$row["category"],$row["linkimg"]);
        }
        echo json_encode($rsobj)." ";
    } 
    else {
    echo "0 results";
    }
    
}
$conn->close();
?>