<?php
require_once "connect.php";
class commentnode {
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
class commentob extends connectob {
    
    private $conn;
    function __construct() {
       $dbcon = new connectob();
       $this->conn = $dbcon->connect();
    }
    function closeconnect(){
    	       $this->conn->close();
    }
    function getlistcomment($linkimg){
        $sql = "SELECT  *  FROM comment WHERE linkimg='$linkimg'";
       $result = $this->conn->query($sql);
       $rsobj = new commentnode();
       if ($result->num_rows > 0) {
         while($row = $result->fetch_assoc()) {
           $rsobj->add_note($row["id"],$row["content"],$row["email"],$row["timeup"],$row["linkimg"]);
         }
         return $rsobj;
       } 
       else {
           return $rsobj;
       }
    }
    function deletecomment($id){
                $sql = "DELETE FROM comment WHERE id='$id'";
                if ($this->conn->query($sql) === TRUE) {
                   //echo "Record deleted successfully";
                   return true;
                 } else {
                   return false;
                   //echo "Error deleting record: " . $conn->error;
                 }
     }        
    function insertcomment($content, $email, $timeup, $linkimg){
        $que= "INSERT INTO comment (
                                   content,
                                   email,
                                   timeup,
                                   linkimg  
                                   )
                      VALUES (
                             '$content',
                             '$email',
                             '$timeup',
                             '$linkimg'
                      )";
                if ($this->conn->query($que) === TRUE) {
                   //echo "Insert successfully";
                   return true;
                 } else {
                   return false;
                 }
    }
    function updatecomment($newcomment, $id){
        $sql = "UPDATE comment SET content='$newcomment' WHERE id='$id'";
                if ($this->conn->query($sql) === TRUE) {
                   return true;
                 } else {
                   return false;
                 }
    }
    function deleteallcommentofavideo($linkimg){
        $sql = "DELETE FROM comment WHERE linkimg='$linkimg'";
                if ($this->conn->query($sql) === TRUE) {
                   return true;
                 } else {
                   return false;
                 } 
    }
}
?>