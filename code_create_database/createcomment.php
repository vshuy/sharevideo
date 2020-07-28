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
       $sql = "DROP TABLE comment";
	if ($conn->query($sql) === TRUE) {
       echo "Table comment droped successfully<br>";
    } else {
        echo "Error droped table: <br>" . $conn->error;
    }


    $sql = "CREATE TABLE comment (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(200) NOT NULL,
    email VARCHAR(50) NOT NULL,
    timeup VARCHAR(50) NOT NULL,
    linkimg VARCHAR(50) NOT NULL
    )";
    if ($conn->query($sql) === TRUE) {
    echo "Table comment created successfully<br>";
    } else {
    echo "Error creating table comment: " . $conn->error;
    }
}
$conn->close();
?>