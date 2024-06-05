<?php

$phrase = $_POST["phrase"];


require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = 'smtp.example.com';
$mail->SMTPSecure = PHPMailer ::ENCRYPTION_STARTTLS;
$mail->port = 587;

$mail->setForm($phrase);
$mail->addAddress('Shirabimbo@gmail.com.com');

$mail->Subject = $subject;
$mail->Body = $message;

$email->send();

echo 'successful';