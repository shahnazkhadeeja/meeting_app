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
$pagesize=5;
$page=0;
if(isset($_GET['page'])){
$page = mysqli_real_escape_string($tcon,$_GET['page']);
}
$from=ceil($pagesize*$page);



$result = $dbase->queryToWhile("SELECT `id`, `title`, `date`, `start_time`, `duration`, `location`, `participants`, `agenda` FROM `meeting-list` ORDER BY `id` DESC LIMIT $from,$pagesize ");

$count = $dbase->queryto_fetch("SELECT COUNT(*) AS `count` FROM `meeting-list` WHERE `id`<>'' ".$search_query." ");



$response=array('result'=>array_filter($result),'count'=>$count['count']);


echo json_encode($response);
