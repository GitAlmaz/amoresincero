<?php
header('Access-Control-Allow-Origin: *');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';
$data = json_decode($_POST[0]);
$mail = $data['email'];
$name = $data['name'];
$birthday = $data['birthday'];
$birth_location = $data['birth_location'];
$citizenship = $data['citizenship'];
$place_of_live = $data['place_of_live'];
$contact_number = $data['contact_number'];
$height_weight = $data['height_weight'];
$photos = json_decode($data['photos']);
$message = "\n
Имя: " . $name . "\n
E-mail:" . $email . "\n
День рождения: " . $birthday . "\n
Место рождения:" . $birth_location . "\n
Гражданство:" . $citizenship . "\n
Место жительство:" . $place_of_live . "\n
Контактный номер:" . $contact_number . "\n
Рост/вес:" . $height_weight . "\n
Фотографии:" . $photos . "";
$email = new PHPMailer(true);
$email->SetFrom('amoresncr@gmail.com');
$email->Subject = 'Новая заявка!';
$email->Body      = $message;
$email->AddAddress( 'belozerov.inhs.artem@gmail.com' );
foreach ($photos as $photo) {
    $res = base64_decode(str_replace(" ", "+", substr($base, strpos($base, ","))));
    $email->AddStringAttachment($res,'filename.png',"base64", "image/png");
}
return $email->Send();
echo $message;

