<?php
require_once "connect.php";
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
    
class videoob extends connectob {
    
    private $conn;
    function __construct() {
       $dbcon = new connectob();
       $this->conn = $dbcon->connect();
    }
    function closeconnect(){
    	       $this->conn->close();
    }
    function getlistvideo(){
        $sql = "SELECT  name,email,timeup,views,category,linkimg  FROM video";
        $result = $this->conn->query($sql);
        $rsobj = new imgob();
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
            //echo $row["name"]. " ".$row["linkimg"] ;
            //array_push($listimg,$row["linkimg"]);
               $rsobj->add_note($row["name"],$row["email"],$row["timeup"],$row["views"],$row["category"],$row["linkimg"]);
            }
            return $rsobj;
           // echo json_encode($rsobj)." ";
        } 
        else {
            return $rsobj;
         //echo "0 results";
        }
    }
    function getlistsgvideo($category){
        $sql = "SELECT  name,email,timeup,views,category,linkimg  FROM video WHERE category='$category'";
        $result = $this->conn->query($sql);
        $rsobj = new imgob();
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
            //echo $row["name"]. " ".$row["linkimg"] ;
            //array_push($listimg,$row["linkimg"]);
               $rsobj->add_note($row["name"],$row["email"],$row["timeup"],$row["views"],$row["category"],$row["linkimg"]);
            }
            return $rsobj;
        } 
        else {
            return $rsobj;
        }
    }
    function uploadvideo($name, $email, $timeup, $category, $linkimg, $linkvideo){
        $que= "INSERT INTO video (
                                   name,
                                   email,
                                   timeup,
                                   views,
                                   category,
                                   linkimg,
                                   linkvideo
                                   )
                      VALUES (
                             '$name',
                             '$email',
                             '$timeup',
                             '0',
                             '$category',
                             '$linkimg',
                             '$linkvideo'
                      )";
                if ($this->conn->query($que) === TRUE) {
                    return true;
                }
                else{
                  return false;
                }
    }
    function renamevideo($newname, $email, $linkimg){
         $sql = "UPDATE video SET name='$newname' WHERE email='$email'  and linkimg='$linkimg'";
                if ($this->conn->query($sql) === TRUE) {
                   return true;
                 } else {
                   return false;
                 }
    }
    function getlistmanagevideo($email){
        if($email!="admin"){  
            $sql = "SELECT  name,email,timeup,views,category,linkimg  FROM video WHERE email='$email'";
            $result = $this->conn->query($sql);
            $rsobj = new imgob();
            if ($result->num_rows > 0) {
               while($row = $result->fetch_assoc()) {
               //echo $row["name"]. " ".$row["linkimg"] ;
               //array_push($listimg,$row["linkimg"]);
               $rsobj->add_note($row["name"],$row["email"],$row["timeup"],$row["views"],$row["category"],$row["linkimg"]);
               }
               return $rsobj;
            } 
            else {
               return $rsobj;
            }
	    }
	    else {
	       $sql = "SELECT  name,email,timeup,views,category,linkimg  FROM video ";
           $result = $this->conn->query($sql);
           $rsobj = new imgob();
           if ($result->num_rows > 0) {
              // output data of each row
              while($row = $result->fetch_assoc()) {
              //echo $row["name"]. " ".$row["linkimg"] ;
              //array_push($listimg,$row["linkimg"]);
              $rsobj->add_note($row["name"],$row["email"],$row["timeup"],$row["views"],$row["category"],$row["linkimg"]);
              }
              return $rsobj;
           } 
           else {
              return $rsobj;
           }
	    } 
    }
    function updateview($linkimg){
            $tmp;
            //echo "hello from update view ".$linkimg ;   
            $sql = "SELECT views FROM video WHERE linkimg='$linkimg'";
            $result = $this->conn->query($sql);
            if ($result->num_rows > 0) {
               while($row = $result->fetch_assoc()) {
                  $tmp=$row["views"]. " " ;
               }   
            } 
            else {
                return false;
            }  
            $count =number_format($tmp);
            $count++;
            $sql = "UPDATE video SET views='$count' WHERE linkimg='$linkimg'";

            if ($this->conn->query($sql) === TRUE) {
               return true;
            } else {
               return false;
            }
    }
    function deletevideo($email, $linkimg){
         $sql = "DELETE FROM video WHERE email='$email'  and linkimg='$linkimg'";
                if ($this->conn->query($sql) === TRUE) {
                	$tmplinkimg = $linkimg;
                    $tmplinkvideo = str_replace(".png", ".mp4",$tmplinkimg);
                    $linkimg = "/var/www/cauhinh/thang/model/uploads/image/".$tmplinkimg;
                    $linkvideo = "/var/www/cauhinh/thang/model/uploads/video/".$tmplinkvideo;
                    //echo "linkimg is :".$linkimg;
                    //echo " linkvideo is :".$linkvideo;
                    unlink($linkimg);
                    unlink($linkvideo);
                    return true;
                   //echo "Record deleted successfully";
                 } else {
                   //echo "Error deleting record: " . $conn->error;
                   return false;
                 }
    }

   
}
?>