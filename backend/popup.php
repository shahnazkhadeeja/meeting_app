<?php
include "dBase.php";
$dbase = new dBase();
$tcon = $dbase->con;
$q = intval($_GET['q']);


$result = $dbase->queryto_fetch_api("SELECT `cname`,`email`,`address` FROM personal WHERE id ='" . $q . "'");


?>
<div>
    <h2><?php echo $result['cname']; ?></h2>
    <h2><?php echo $result['email']; ?></h2>
    <h2><?php echo $result['address1']; ?></h2>
</div>