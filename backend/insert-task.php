<?php
include "dBase.php";
$dbase= new dBase();
$tcon=$dbase->con;


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$response = array('status' => 'fail', 'message' => 'Something went wrong Please try again');
$postdata = file_get_contents("php://input");  

         $id_data = json_decode($postdata);
                          
                 if (isset($id_data) )
                 {

                  $task_title =mysqli_real_escape_string($tcon,$id_data->task_title);

                  $start_time = mysqli_real_escape_string($tcon,$id_data->start_time);
                  
                  $description = mysqli_real_escape_string($tcon,$id_data->description);
                  
                  $priority = mysqli_real_escape_string($tcon,$id_data->priority);
                     
                  $task_id=    $dbase->execute_return_id("INSERT INTO `task`(`id`, `task_title`, `priority`, `time`, `description`) VALUES ('id','$task_title','$priority','$start_time','$description')  ");
                  
                  $response = array('status' => 'success', 'message' => 'data saved');
                  
                  $assigned_to= $id_data->assigned_to;
               
                foreach (array_filter($assigned_to) as $as_key => $as_value) {
                    
                  
                   $as_key=$as_value; 
                   
                  $dbase-> execute("INSERT INTO `task_assigned`(`id`, `task_id`, `UID`) VALUES ('id','$task_id','$as_key')");
                        
                          
                         }
                           $response = array('status' => 'success', 'message' => 'data saved');
                        }
               

echo json_encode($response);





