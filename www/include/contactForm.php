<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = "contact@aerochimps.com"; 
    // $to = 'contact@aerochimps.com'; 
    $to = "gumaestri@gmail.com";
    $subject = $_POST['message'];

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Your message has been sent!</p>';
    } else { 
        echo '<p class="error">Something went wrong, go back and try again!</p>'; 
    }
?>