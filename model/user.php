
<?php
require_once "connect.php";
class userob extends connectob {
    
    private $email;
    private $password;
    private $conn;
    
    function __construct($email, $password) {
       $this->email = $email;
       $this->password = $password;
       $dbcon = new connectob();
       $this->conn = $dbcon->connect();
    }
    function closeconnect(){
    	       $this->conn->close();
    }
    function checkuser(){
        $lu=strlen($this->email);
        $lp=strlen($this->password);
        if($lu==0 || $lu >=15 || $lp ==0 and $lp >= 15){
            return false;
        }
        $sql = "SELECT email,password FROM acount WHERE email='$this->email'  and password='$this->password'";
        $result = $this->conn->query($sql);
        $num_rows = mysqli_num_rows($result);
			if ($num_rows!=0) {
				  return true;
                 } else {
                   return false;
                 }               
    }
    function getname(){
        $sql = "SELECT name FROM acount WHERE email='$this->email'  and password='$this->password'";
        $result = $this->conn->query($sql);
        if ($result->num_rows > 0) {
              while($row = $result->fetch_assoc()) {
                 return $row["name"];
              }
        }
    }
    function register($uname){
    	$sql = "SELECT email FROM acount WHERE email='$this->email'";
        $result = $this->conn->query($sql);
        $num_rows = mysqli_num_rows($result);
        if ($num_rows==0) {
            $que= "INSERT INTO acount (
                                   name,
                                   email,
                                   password
                                   )
                      VALUES (
                             '$uname',
                             '$this->email',
                             '$this->password'
                      )";
        if ($this->conn->query($que) === TRUE) {        	         
                     return true;
                }
                else{                  
                  return false;
                }
           } 
           else{                              
                return false;
           }
    }
    function updatename($newname){
    	if($this->checkuser()==true){
        $sql = "UPDATE acount SET name='$newname' WHERE email='$this->email'  and password='$this->password'";
                if ($this->conn->query($sql) === TRUE) {
                   return true;
                 } else {
                   return false;
                 }
    	}
    	else {
    		return false;
    	}
    }
    function updatepassword($newpassword){
    	if($this->checkuser()==true){
    	$sql = "UPDATE acount SET password='$newpassword' WHERE email='$this->email'  and password='$this->password'";
                if ($this->conn->query($sql) === TRUE) {
                   return true;
                 } else {
                   return false;
                 }
    	}
    	else{
    		return false;
    	}
    }
}
?>