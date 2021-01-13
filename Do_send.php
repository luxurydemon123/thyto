<?php ;
require('mail/PHPMailer.php');
require('mail/SMTP.php');
require('mail/POP3.php');


	
		// get information from sign up offline
		$fullname = $this->input->post('fullname');
		$phonenumber = $this->input->post('phonenumber');
		$email = $this->input->post('email');
		$email2 = $this->input->post('email2');
		$schedule = $this->input->post('schedule');
		

		$this->load->model('admin/Manage_student_model');
		$this->Manage_student_model->signup_offline($fullname, $phonenumber,$email,$schedule);
		
		



		
		


		// Instantiation and passing `true` enables exceptions
		
		$mail = new PHPMailer\PHPMailer\PHPMailer();
	    $mail->IsSMTP(); // enable SMTP

	    $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
	    $mail->SMTPAuth = true; // authentication enabled
	    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
	    $mail->Host = "smtp.gmail.com";
	    $mail->Port = 465; // or 587
	    $mail->CharSet = "UTF-8";
	    $mail->IsHTML(true);
	    $mail->Username = "luxurydemon1999@gmail.com";
	    $mail->Password = "sosztdrzcvvflxji";
	    $mail->SetFrom("luxurydemon1999@gmail.com", $fullname);
	    $mail->AddAddress($email2);
	    $mail->Subject = "Anouncement!, A new student has just registered: ".$fullname ." And Phonenumber ".$phonenumber;
	    $mail->Body = "Full Name is:" . $fullname ."<br/>" . "Phonenumber " . $phonenumber ."<br/>" . "Email: " . $email ."<br/>" . "Schedule: " . $schedule ;



	    if(!$mail->send()) {
	    	echo "Mailer Error: " . $mail->ErrorInfo;
	    } else {
	    	$this->load->view('message/Message_view');
	    }





/* End of file Do_send.php */
/* Location: ./application/controllers/Do_send.php */