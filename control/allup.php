<?php
require_once('../model/video.php');
require_once('../model/user.php');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST['fileInfo'], false);
$tid = uniqid();
$imgname=$tid.'.jpg';
$videoname=$tid.'.mp4';
$statusup=0;
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
  $statusup++;////////////////////////////////////1
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
      $file = UPLOAD_DIR . $tid . '.jpg';
      $success = file_put_contents($file, $data);  
      //print $success ? $file : 'Unable to save the file. ';
       $statusup++;///////////////////////////////2
//////////////////////////////////////////////////////////////////////////////////////////////////////////// 
if($statusup==2){
      $video = new videoob();
      if($video->uploadvideo($obj->videoname,$obj->user,$obj->timeup,$obj->category,$imgname,$videoname)==true)
      {
       $statusup++;////////////////////////////////3    
      }         
}
echo $statusup;
?>
