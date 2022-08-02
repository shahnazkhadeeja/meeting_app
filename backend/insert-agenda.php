<?php
include "dBase.php";
$dbase= new dBase();
$tcon=$dbase->con;


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// echo('reached db');
// error_reporting(0);
$response = array('status' => 'fail', 'message' => 'Something went wrong Please try again');
$postdata = file_get_contents("php://input");


// if (!empty($_FILES) ) {

    // if (isset($_POST['APIKEY'])) {
        // $key_ = mysqli_real_escape_string($tcon, $_POST['APIKEY']);
        
        

                $id_data = json_decode($postdata);
                 print_r($id_data);
                
                 if (isset($postdata) ){
                  $title =mysqli_real_escape_string($tcon,$id_data->title);

                  $content = mysqli_real_escape_string($tcon,$id_data->content);
                   
                                          
                          $dbase->execute("INSERT INTO `agenda`(`id`, `agenda_title`, `content`) VALUES ('id','$title','$content')");
                            $response = array('status' => 'success', 'message' => 'data saved');
                         }
                    // }
                // }
            // }
        


echo json_encode($response);





