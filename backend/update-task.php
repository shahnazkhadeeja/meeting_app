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
          
                
                 if (isset($id_data) ){
                  $task_title =mysqli_real_escape_string($tcon,$id_data->task_title);

                  $start_time = mysqli_real_escape_string($tcon,$id_data->start_time);
                  
                  $description = mysqli_real_escape_string($tcon,$id_data->description);
                  
                  $priority = mysqli_real_escape_string($tcon,$id_data->priority);

                  $id = mysqli_real_escape_string($tcon,$id_data->id);

                  $assigned_to=$id_data->assigned_to; 
                  
                  $dbase-> execute("DELETE from `task_assigned` WHERE `task_id`='$id'");

                  foreach (array_filter($assigned_to) as $as_key => $as_value) {
                    
                  
                    $as_key=$as_value; 

                  
                         
                   $dbase-> execute("INSERT INTO `task_assigned`(`id`, `task_id`, `UID`) VALUES ('id','$id','$as_key')");
                           
                          }
                 
                                                       
                            $dbase->execute("UPDATE `task` SET `task_title`='$task_title', `priority`='$priority', `time`='$start_time', `description`='$description' WHERE `id`='$id'  ");
                            $response = array('status' => 'success', 'message' => 'data saved');
                         }
                    // }
                // }
            // }
        


echo json_encode($response);





