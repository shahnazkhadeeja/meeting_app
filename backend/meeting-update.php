


<?php
include "dBase.php";
$dbase = new dBase();
$tcon = $dbase->con;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$response = array('status' => 'fail', 'message' => 'Something went wrong Please try again');
$postdata = file_get_contents("php://input");

$id_data = json_decode($postdata);
          
                
                 if (isset($postdata) )
                 
                 {

                  $title =mysqli_real_escape_string($tcon,$id_data->title);

                  $start_time = mysqli_real_escape_string($tcon,$id_data->start_time);
                  
                  $date = mysqli_real_escape_string($tcon,$id_data->date);
                  
                  $duration = mysqli_real_escape_string($tcon,$id_data->duration);

                  $id = mysqli_real_escape_string($tcon,$id_data->id);

                  $location = mysqli_real_escape_string($tcon,$id_data->location);

                  $agenda = mysqli_real_escape_string($tcon,$id_data->agenda);
                  
                 
                                                       
                            $dbase->execute("UPDATE `meeting-list` SET `title`='$title',`date`='$date',`start_time`='$start_time',`duration`='$duration',`location`='$location',`agenda`='$agenda' WHERE `id`='$id' ");
                            $response = array('status' => 'success', 'message' => 'data saved');
                         }
                
        echo json_encode($response);




