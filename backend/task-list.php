<?php
include "dBase.php";
$dbase = new dBase();
$tcon = $dbase->con;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$search='';$search_query='';
$pagesize=10;
$page=0;
if(isset($_GET['page'])){
    $page = mysqli_real_escape_string($tcon,$_GET['page']);
    }
    $from=ceil($pagesize*$page);
    


$result = $dbase->queryToWhile("SELECT `id`, `task_title`, `assigned_to`, `priority`, `time`, `description`,`status` FROM `task`  ORDER BY `id` DESC LIMIT $from,$pagesize ");

$count = $dbase->queryto_fetch("SELECT COUNT(*) AS `count` FROM `task` WHERE `id`<>'' ".$search_query." ");


$id=$dbase->queryToWhile("SELECT `id` FROM `task` ");

// $uid=$dbase-> queryToWhile("SELECT `uid` FROM `task_assigned` where `task_id`='$id'");

// $uid=$dbase->queryToWhile("SELECT `UID` FROM `task_assigned` WHERE `task_id`='$id' ");

$value=$dbase->queryToWhile("SELECT employee.emp_name FROM `employee` INNER JOIN `task_assigned` ON task_assigned.UID=employee.UID");

$response=array('result'=>array_filter($result),'task'=>($id),'value'=>($value),'count'=>$count['count']);


echo json_encode($response);
