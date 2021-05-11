---
layout:
---
<?php

/* Cleaning user inputs */
function clean_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return !empty($data) ? $data : false;
}

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
  $field_name    = clean_input($_POST['cf_name']);
  $field_email   = clean_input($_POST['cf_email']);
  $field_region  = clean_input($_POST['cf_region']);
  $field_redirect_to = clean_input($_POST['cf_redirect_to']);
  //$field_contact = clean_input($_POST['cf_contact']);
} else {
  exit();
}

if (!$field_email || !filter_var($field_email, FILTER_VALIDATE_EMAIL)) {
?>
        <script language="javascript" type="text/javascript">
                alert('Please provide a valid email address.');
                history.back();
        </script>
<?php
  exit();
}

$mail_to = 'contact@xrebellion.ch';
$mail_to_newsletter = 'xr-switzerland-subscribe@lists.riseup.net';

$subject = 'Rebell sign up request from '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Region: '.$field_region."\n";
//$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

// Subscribe to newsletter by sending an email to xr-switzerland-subscribe@lists.riseup.net
mail($mail_to_newsletter, $subject, '', $headers);

// Send email to contact@xrebellion.ch to get in contact with the local group
$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) {
	header('Location: '.$field_redirect_to);
}
else { ?>
        <script language="javascript" type="text/javascript">
                alert('Message failed.');
                history.back();
        </script>
<?php
}
