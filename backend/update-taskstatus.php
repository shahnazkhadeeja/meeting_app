<?php
include "dBase.php";
$dbase= new dBase();
$tcon=$dbase->con;


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$postdata = file_get_contents("php://input");  

         $id_data = json_decode($postdata);

                 if (isset($postdata)  ){
                  $status =mysqli_real_escape_string($tcon,$id_data->status);
                  $id =mysqli_real_escape_string($tcon,$id_data->task_id);
                  
                  
                 
                                                       
                            $dbase->execute("UPDATE `task` SET `status`='$status' WHERE `id`='$id'  ");
                            $response = array('status' => 'success', 'message' => 'data saved');
                         }
                    // }
                // }
            // }
        



echo json_encode($response);





