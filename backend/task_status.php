<?php
include "dBase.php";
$dbase = new dBase();
$tcon = $dbase->con;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");




$result_NT = $dbase->queryToWhile("SELECT `id`, `task_title`, `assigned_to`, `priority`, `time`, `description`,`status` FROM `task` WHERE `status`='not_started' ORDER BY `id` DESC ");

$result_IP = $dbase->queryToWhile("SELECT `id`, `task_title`, `assigned_to`, `priority`, `time`, `description`,`status` FROM `task` WHERE `status`='progress' ORDER BY `id` DESC ");


$result_CA = $dbase->queryToWhile("SELECT `id`, `task_title`, `assigned_to`, `priority`, `time`, `description`,`status` FROM `task` WHERE `status`='cancelled' ORDER BY `id` DESC ");


$result_CO = $dbase->queryToWhile("SELECT `id`, `task_title`, `assigned_to`, `priority`, `time`, `description`,`status` FROM `task` WHERE `status`='completed' ORDER BY `id` DESC ");




$response=array('not_started'=>array_filter($result_NT),'progress'=>array_filter($result_IP),
'completed'=>array_filter($result_CO),'cancel'=>array_filter($result_CA)
);


echo json_encode($response);
