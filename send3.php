<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = "localhost";
$mail->SMTPAuth = false;
$mail->setFrom("tonichok@i.ua", "Web site");
$mail->addAddress("tonichok@gmail.com");
$mail->Subject = "Thank you for your order";
$mail->Body = "Your package will arrive soon.";
$mail->send();
?>