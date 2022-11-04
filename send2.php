<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';

    require '../vendor/autoload.php';

    $mail = new PHPMailer();
    $mail -> charSet = 'UTF-8';
    $mail -> IsHTML(true);

    $mail -> setFrom ('tonichok@i.ua', 'Site Portfolio');
    $mail -> addAddress ('tonichok@gmail.com');

    $mail -> Subject = 'Hello';

    $body = "Ура!";

    if (trim(!empty($_POST['name']))) {
        $body.= "name: " .$_POST['name'];
    }

    if(trim(!empty($_POST['email']))) {
        $body.= "e-mail: " .$_POST['email'];
    }

    if(trim(!empty($_POST['message']))) {
        $body.="<p>Повідомлення: " .$_POST['message'];
    }

    $mail -> Body = $body;
    
    if (!$mail->send()) {
        $message = errorMessage();
    } else {
        $message = 'Send';
    }

    $response = ['message' => $message];

    header('Content-type : application/json');
    echo json_encode($response);
?>