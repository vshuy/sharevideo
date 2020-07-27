<?php
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
    $tmp;
	//echo "hello from update view ".$linkimg ;   
    $sql = "SELECT views FROM video WHERE linkimg='$linkimg'";
    $result = $conn->query($sql);
     if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
           $tmp=$row["views"]. " " ;
        }
   
    } 
    else {
    echo " Not result";
    }  
    $count =number_format($tmp);
    $count++;
    $sql = "UPDATE video SET views='$count' WHERE linkimg='$linkimg'";

    if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
    } else {
    echo "Error updating record: " . $conn->error;
    }
}
$conn->close();
?>