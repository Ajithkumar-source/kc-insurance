<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
        
        class Email extends CI_Controller{
        
            function  __construct(){
                parent::__construct();
            }
        
            function send(){
                // Load PHPMailer library
                $this->load->library('phpmailer_lib');
        
                // PHPMailer object
                $mail = $this->phpmailer_lib->load();
        
                
        
                // Add a recipient
                $mail->addAddress('ajithkumar.n@struzon.co.in');
        
                // Add cc or bcc 
                //$mail->addCC('ajithkumar.n@yandex.com');
                //$mail->addBCC('ajithkumar.n@yandex.com');
        
                // Email subject
                $mail->Subject = 'Send Email via SMTP using PHPMailer in CodeIgniter';
        
                // Set email format to HTML
                $mail->isHTML(true);
        
                // Email body content
                $mailContent = "<h1>Send HTML Email using SMTP in CodeIgniter</h1>
                    <p>This is a test email sending using SMTP mail server with PHPMailer.</p>";
                $mail->Body = $mailContent;
        
                // Send email
                if(!$mail->send()){
                    echo 'Message could not be sent.';
                    echo 'Mailer Error: ' . $mail->ErrorInfo;
                }else{
                    echo 'Message has been sent';
                }
            }
        
        }