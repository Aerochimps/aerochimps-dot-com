<?php
    $mailcopyfile = '/home/aerochimp/aerochimps.com/email_copy.txt';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'contact@aerochimps.com'; 
    $subject = $_POST['subject'];

    $body = $message;

    $headers = "";
    $headers .= "From: ". $name ."\n";
    $headers .= "Reply-To: ". $email ."\n";
    $headers .= "X-Mailer: PHP/".phpversion()."\n";

    if (mail ($to, $subject, $body, $headers)) { 
        $fp = fopen($mailcopyfile, "a"); 
        $now = date('Y-m-d H:i:s');
        fputs($fp, $now ."\n". $headers . $subject ."\n". $body . "\n\n");
        fclose($fp);
        echo 'Vielen Dank für Ihren Kontakt!';
    } else { 
        echo 'Oops! Unsere Affen waren nicht in der Lage, um Ihre Nachricht zu senden, versuchen Sie es erneut!'; 
    }
?>