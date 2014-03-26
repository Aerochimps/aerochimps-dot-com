<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    // $from = "contact@aerochimps.com"; 
     // $to = 'contact@aerochimps.com'; 
    $to = "gumaestri@gmail.com";
    $subject = $_POST['subject'];

    $body = $message;

    $headers = "";
    $headers .= "From: ". $name ." <". $email .">\n";
    $headers .= "Reply-To: ". $email ."\n";

    if (mail ($to, $subject, $body, $headers)) { 
        echo 'Obrigado pelo seu contato!';
    } else { 
        echo 'Ops!! Nossos macacos não conseguiram enviar sua mensagem, tente novamente!'; 
    }
?>