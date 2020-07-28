<?php
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
else{
       echo "connec database successfully<br>"; 
       $sql = "DROP TABLE video";
	if ($conn->query($sql) === TRUE) {
       echo "Table video droped successfully<br>";
    } else {
        echo "Error droped table: <br>" . $conn->error;
    }


    $sql = "CREATE TABLE video (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(50) NOT NULL,
    timeup VARCHAR(50) NOT NULL,
    views VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    linkimg VARCHAR(50) NOT NULL,
    linkvideo VARCHAR(50) NOT NULL
    )";
    if ($conn->query($sql) === TRUE) {
    echo "Table video created successfully<br>";
    } else {
    echo "Error creating table video: " . $conn->error;
    }
}
$conn->close();
?>