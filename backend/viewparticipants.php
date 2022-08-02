<?php
include "dBase.php";
$dbase = new dBase();
$tcon = $dbase->con;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$result = $dbase->queryToWhile( 'SELECT `UID`, `emp_name` FROM `employee`  ' );

$response=array('result'=>array_filter($result));

echo json_encode($response);

?>