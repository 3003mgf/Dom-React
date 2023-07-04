<?php

if(isset($_FILE["file"])){
    $tmp_name = $_FILES["file"]["tmp_name"];
    $error = $_FILES["file"]["error"];

    $destination = "../assets/files/"

    $move = move_uploaded_file($tmp_name, $destination);


    if($move){
        $res = "Exito!";
    }else{
        $res = "Error";
    }


    echo json_encode($res);
}