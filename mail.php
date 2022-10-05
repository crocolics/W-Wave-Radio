<!-- Подключаем файлы Mailer-а -->
<?php 
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Создаем переменную 'Тема письма'
$title = "Тема письма";
// Создаем переменную для прикрепленных файлов(если нужно)
$file = $_FILES['file'];
$c = true;

// Создание тело письма
$title = "Заголовок письма";
foreach ( $post as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
        $body .= "
        " . ( ($c = !$c) ? 'tr': '<tr style="background-color: #f8f8f8;">' ) . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>
        ";
    }
}
$body = "<table style='width:100%;'>$body</table>";

// Создаем PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP(); //Выбираем протокол SMTP
    $mail->CharSet = "UTF-8";//Выбираем кодировку
    $mail->SMTPAuth = true;//Включаем авторизацю
    // Настройка почты
    $mail->Host = 'smtp.gmail.com'; //Адрес SMTP-сервера почты
    $mail->Username = 'it.forma.plus@gmail.com'; //Логин
    $mail->Password = 'rmtbrfuvbjhnjhvk';
    $mail->SMTPSecure = 'ssl'
    $mail->Port = 465;

    $mail->setFrom('it.forma.plus@gmail.com', 'Заявка с вашего сайта'); //Задание имени отправителя

    //Настройка получателей письма
    $mail->addAddress('it.forma.plus@gmail.com');// Если нужно еще, добавить такую строку, сменив адрес получателя
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    $mail->send();

} catch(Exeption $e) {
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}