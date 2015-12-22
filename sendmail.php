<?php
       require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
       $mail = new PHPMailer(); // defaults to using php "mail()"
       $body = 'this is an email';
       $mail->AddReplyTo("sltiedeman@gmail.com","Stephen Tiedemann");
       $mail->SetFrom('sltiedeman@gmail.com', 'From Stephen Tiedemann');
       $address = "sltiedeman@gmail.com";
       $mail->AddAddress($address, "Stephen Tiedemann");
       $mail->Subject    = "PHPMailer Test Subject via mail(), basic";
       $mail->MsgHTML($body);
       if(!$mail->Send()) {
       echo "Mailer Error: " . $mail->ErrorInfo;
       } else {
       echo "Message sent!";
       }
?>