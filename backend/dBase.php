<?php

/**
 
 * User: Shahnaz Khadeeja */
/**
 * Description of dBase
 *
 * @author AA
 */
date_default_timezone_set("Asia/Dubai");
class dBase
{



    public $con;
    private $server;
    private $user;
    private $pass;
    private $db;
    private $msgType;
    private $msgText;

    // public $result;


    function __construct($server = "127.0.0.1", $user = "root", $pass = "", $db = "meeting_app", $con = "")

    {
        $this->server = $server;
        $this->user = $user;
        $this->pass = $pass;
        $this->db = $db;
        $this->con = mysqli_connect($this->server, $this->user, $this->pass);
    }

    public function execute($query)
    {
        $this->open();

        $result = mysqli_query($this->con, $query) or die(" " . mysqli_error($this->con));
        $this->close();
        return $result;
    }

    public function open()
    {
        $this->con = mysqli_connect($this->server, $this->user, $this->pass);
        if (!$this->con) {
            $this->msgText = 'Not connected : ' . mysqli_error($this->con);
            $this->msgType = "Error";
        }

        $db_selected = mysqli_select_db($this->con, $this->db);
        if (!$db_selected) {
            $this->msgText = 'Can\'t use database : ' . mysqli_error($this->con);
            $this->msgType = "Error";
        }
    }


    public function close()
    {
        $this->con = mysqli_connect($this->server, $this->user, $this->pass);
        mysqli_close($this->con);
    }


    function queryToWhile($queryToWhile_v1)
    {
        $queryToWhile_r = $this->execute($queryToWhile_v1);
        while ($queryToWhile_f[] = mysqli_fetch_array($queryToWhile_r)) {
        }
        return $queryToWhile_f;
    }
 
    function queryToWhile_2($query)
    {
        $e = $this->execute($query);
        while ($f[] = mysqli_fetch_assoc($e)) {
        }
        return $f;
    }
 
    function queryto_fetch($queryto_fetch_v1)
    {
        $queryto_fetch_r = $this->execute($queryto_fetch_v1);
        $queryto_fetch_f = mysqli_fetch_assoc($queryto_fetch_r);
        return array_filter($queryto_fetch_f);
    }
 
    function queryto_fetch_api($queryto_fetch_v1)
    {
        $queryto_fetch_r = $this->execute($queryto_fetch_v1);
        $queryto_fetch_f = mysqli_fetch_assoc($queryto_fetch_r);
        return $queryto_fetch_f;
    }
    public function execute_return_id($query)
    {
        $this->open();
        $result = mysqli_query($this->con, $query) or die(" " . mysqli_error($this->con));
        return mysqli_insert_id($this->con);
        $this->close();
    }
 
    function file_upload($filename, $filepath, $formats)
{

        $upload_status = 'false';
        if (isset($_FILES)) {
            $img_resource = new Upload($_FILES[$filename]);
            $img = $_FILES[$filename]['name'];
            if ($img != '') {
                $img_size = $_FILES[$filename]['size'];
                $extension = pathinfo($img, PATHINFO_EXTENSION);

                if ($img_size < 40000000 and $img_size > 100) {
                    if (in_array($extension, $formats)) {

                        $unique_file = uniqid();
                        $img_resource->file_new_name_body = $unique_file;

                        $img_resource->Process($filepath);
                        if ($img_resource->processed) {
                            $banner = $filepath . $unique_file . '.' . $extension;
                            $img_resource->Clean();
                            $upload_status = $unique_file . '.' . $extension;
                        } else {
                            $upload_status = 'false';
                        }
                    } else {
                        $upload_status = 'false';
                    }
                } else {
                    $upload_status = 'false';
                }
            } else {
                $upload_status = 'false';
            }
        }
        return $upload_status;
    }





}
