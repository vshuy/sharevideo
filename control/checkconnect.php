<?php
require_once "../model/connect.php";
$dbcon = new connectob();
if($dbcon->connect()==false){
   echo "connec database failse";  
}
else {
    echo "connec database successfully"; 
}
?>
