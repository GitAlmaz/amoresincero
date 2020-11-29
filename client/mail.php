<?php
header('Access-Control-Allow-Origin: *');
use PHPMailer\PHPMailer;
use PHPMailer\Exception;
$mail = trim($_POST['email']);
$name = trim($_POST['name']);
$birthday = trim($_POST['birthday']);
$birth_location = trim($_POST['birth_location']);
$citizenship = trim($_POST['citizenship']);
$place_of_live = trim($_POST['place_of_live']);
$contact_number = trim($_POST['contact_number']);
$height_weight = trim($_POST['height_weight']);
$photos_base = trim($_POST['photos']);
$photos = base64_encode($photos_base);
$message = "\n
Имя: " . $name . "\n
E-mail:" . $email . "\n
День рождения: " . $birthday . "\n
Место рождения:" . $birth_location . "\n
Гражданство:" . $citizenship . "\n
Место жительство:" . $place_of_live . "\n
Контактный номер:" . $contact_number . "\n
Рост/вес:" . $height_weight . "\n
Фотографии:" . $height_weight . "\n";
$email = new PHPMailer();
$email->SetFrom('from Artem');
$email->Subject = 'Новая заявка!';
$email->Body      = $bodytext;
$email->AddAddress( 'belozerov.inhs.artem@gmail.com' );
$email->AddAttachment( $photos , 'Фотографии' );
return $email->Send();
// $to = "Amoresincero1@yandex.ru";

// $message = $photos;

// $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
// $subject = "Новая заявка";

// $mail = mail($to, $subject, $message, $headers);

// if ($mail) {
// 	echo 1;
// } else {
// 	echo 0;
// }

