<?php

header('Content-Type: application/json');

// Get the request body
$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

// Validate the input
if (!$data->name || !$data->email || !$data->message) {
  http_response_code(400);
  echo json_encode(array('error' => 'Invalid input'));
  exit;
}

// Set the recipient email address
$to = 'darrylcrockett@gmail.com';

// Set the email subject
$subject = 'New message from ' . $data->name;

// Set the email message
$message = 'Name: ' . $data->name . "\r\n";
$message .= 'Email: ' . $data->email . "\r\n";
$message .= 'Message: ' . $data->message . "\r\n";

// Set the email headers
$headers = 'From: ' . $data->name . ' <' . $data->email . '>' . "\r\n";
$headers .= 'Reply-To: ' . $data->email . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

// Send the email
if (mail($to, $subject, $message, $headers)) {
  echo json_encode(array('success' => 'Email sent successfully'));
} else {
  http_response_code(500);
  echo json_encode(array('error' => 'Error sending email'));
}

?>
