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

                  $date = mysqli_real_escape_string($tcon,$id_data->date);
                  
                  $start_time = mysqli_real_escape_string($tcon,$id_data->start_time);
                  
                  $duration = mysqli_real_escape_string($tcon,$id_data->duration);
                  
                  $location = mysqli_real_escape_string($tcon,$id_data->location);
                  
                               
                  $agenda = mysqli_real_escape_string($tcon,$id_data->agenda);

                  $participants = $id_data->participants;

                  $meeting_id=$dbase->execute_return_id("INSERT INTO `meeting-list`(`id`, `title`, `date`, `start_time`, `duration`, `location`, `agenda`) VALUES ('id','$title','$date','$start_time','$duration','$location','$agenda')  ");
                  
                  foreach (array_filter( $participants) as $as_key => $as_value) 
                  {
                                      
                  $as_key=$as_value; 
                                                           
                  $dbase-> execute("INSERT INTO `participant`(`participant_id`, `UID`, `meeting_id`) VALUES ('participant_id','$as_key','$meeting_id')") ;                          
                 
                          
                  }
                  
                           
                  $response = array('status' => 'success', 'message' => 'data saved');
                         }
                    // }
                // }
            // }
        


echo json_encode($response);





