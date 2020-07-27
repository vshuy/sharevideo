
<?php
$servername = "localhost";
$username = "THANG";
$password = "password";
$dbname = "THANGDB";
$statusup=0;
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else{
       //echo "connec database successfully "; 
       $statusup++;//1
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST['fileInfo'], false);
$tid = uniqid();
$imgname=$tid.'.png';
$videoname=$tid.'.mp4';
/*echo "source from server php   ";
echo "id is ".$tid." ";
echo $obj->user." ";
echo $obj->videoname." "; 
echo $imgname." ";
echo $videoname." ";
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
$temp = explode(".", $_FILES["fileToUpload"]["name"]);
$newfilename = $tid . '.' . end($temp);

if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], "uploads/video/" . $newfilename)){
 //echo "uploaded succeed ";
  $statusup++;//2
}
else{
 //echo "Sorry, your file was not uploaded.";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
 define('UPLOAD_DIR', 'uploads/image/');  
      $img = $_POST['fileImageUpload'];  
      $img = str_replace('data:image/png;base64,', '', $img);  
      $img = str_replace(' ', '+', $img);  
      $data = base64_decode($img);  
      $file = UPLOAD_DIR . $tid . '.png';  
      $success = file_put_contents($file, $data);  
      //print $success ? $file : 'Unable to save the file. ';
       $statusup++;//3
//////////////////////////////////////////////////////////////////////////////////////////////////////////// 
if($statusup==3){
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
                             '$obj->videoname',
                             '$obj->user',
                             '$obj->timeup',
                             '0',
                             '$obj->category',
                             '$imgname',
                             '$videoname'
                      )";
if ($conn->query($que) === TRUE) {
                    // echo " insert successfully ";
                     //echo "1";
                      $statusup++;//4
                }
                else{
                  //echo " orrcude a error while insert database";
                  //echo "0";
                }
}
echo $statusup;
$conn->close();
?>
