<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'contact@aerochimps.com'; 
    $subject = $_POST['subject'];

    $body = $message;

    $headers = "";
    $headers .= "From: ". $name ." <". $email .">\n";
    $headers .= "Reply-To: ". $email ."\n";
    $headers .= "X-Mailer: PHP/".phpversion();

    if (mail ($to, $subject, $body, $headers)) { 
        echo 'Obrigado pelo seu contato!';
    } else { 
        echo 'Ops!! Nossos macacos não conseguiram enviar sua mensagem, tente novamente!'; 
    }
?>