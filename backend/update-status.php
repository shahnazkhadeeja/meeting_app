<?php
include "dBase.php";
$dbase = new dBase();
$tcon = $dbase->con;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// $postdata = file_get_contents("php://input");

$postdata = file_get_contents("php://input");
$response = array('status' => 'fail');



if (isset($postdata) && !empty($postdata)) {


    // Extract the data.
    $request = json_decode($postdata);
    $id = mysqli_real_escape_string($tcon, $request->id);
    $status = mysqli_real_escape_string($tcon, $request->status);
    if ($id != '' AND $status !='' ) {

        $result = $dbase->execute("UPDATE `task` SET `status`='$status' WHERE id='$id'");
        $response = array('status' => 'success');
    }
}
echo json_encode($response);
