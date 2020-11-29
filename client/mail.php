<?php
header('Access-Control-Allow-Origin: *');

$to = "Amoresincero1@yandex.ru";
$email = trim($_POST['email']);
$name = trim($_POST['name']);

$message = "\n\nИмя: " . $name . "\n\nE-mail:" . $email . "";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
$subject = "Новая заявка";

$mail = mail($to, $subject, $message, $headers);

if ($mail) {
	echo 1;
} else {
	echo 0;
}
