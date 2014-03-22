<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = "contact@aerochimps.com"; 
    // $to = 'contact@aerochimps.com'; 
    $to = "gumaestri@gmail.com";
    $subject = $_POST['subject'];

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if (mail ($to, $subject, $body, $from)) { 
        echo 'Obrigado pelo seu contato!';
    } else { 
        echo 'Ops!! Nossos macacos não conseguiram enviar sua mensagem, tente novamente!'; 
    }
?>