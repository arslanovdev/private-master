<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

if($name and $phone){
    $to = "albert.arslanov@pedant.ru";
    $from = "no-reply@online-mastera.ru";

    $subject = "[Частный мастер] Заявка с сайта";
    $message = "Имя: ".$name."\n\n"."Фамилия ".$phone;

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);

    echo 'success';
} else {
    echo 'failed';
}

?>