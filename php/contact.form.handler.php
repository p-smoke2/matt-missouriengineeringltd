<?php

$name =$_POST['email'];
$message =$_POST['message'];

$email_from ='info@missouriltd.com';

$email_subject ="Contact Form Submission";

$email_body ="User Name: $name./n".
               "User Number: $visitor_number./n".
               "User Email: $visitor_email./n".
               "User Subject: $visitor_subject./n".
               "User Message: $message./n".;
               
               $to = "info@missouriltd.com";
               
               $headers = "From: $email-from /r/n";
               
               $headers = "Reply-To: $visitor_email /r/n";
               mail($to,$email_subject,$email_body,sheaders);
               header("Location: contact_us_1.html");
               
               
               
 ?>