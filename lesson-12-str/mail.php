<?php

$recepient = "yuljakas@gmail.com";
$siteName = "les.sl";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email=trim($_POST["mail"]);
$mes=trim($_POST["message"]);

$subject = "Заявка с сайта";
// Сообщение письма
$message = "
Имя пользователя: ".htmlspecialchars($name)."<br />
Номер телефона: ".htmlspecialchars($phone)." <br />
Email: ".htmlspecialchars($email)."<br />
Сообщение: ".htmlspecialchars($mes)."
";

// Отправляем письмо при помощи функции mail();
mail ($recepient, $subject, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>




