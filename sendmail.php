<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

$mail->setFrom('info@gmail.com', 'Алдияр');
$mail->addAddress('samaldiar@gmail.com');
$mail->subject = "Новое сообщение с сайта";

$body = "<h1>Новое письмо с сайта</h1>";

if (trim(!empty($_POST['name']))) {
    $body .= "<p><strong>Имя:</strong> " . $_POST['name'] . "</p>";
}
if (trim(!empty($_POST['email']))) {
    $body .= "<p><strong>E-mail:</strong> " . $_POST['email'] . "</p>";
}
if (trim(!empty($_POST['phone']))) {
    $body .= "<p><strong>Номер телефона:</strong> " . $_POST['phone'] . "</p>";
}
if (trim(!empty($_POST['message']))) {
    $body .= "<p><strong>Сообщение:</strong> " . $_POST['message'] . "</p>";
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = "Ошибка!";
} else {
    $message = "Данные успешно отправлены!";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
