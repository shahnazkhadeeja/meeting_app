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
    if ($id != '') {

        $result = $dbase->execute("DELETE FROM `task` WHERE id='$id'");
        $response = array('status' => 'success');
    }
}
echo json_encode($response);
