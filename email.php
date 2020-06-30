<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

// get posted data
$data = json_decode(file_get_contents("php://input"));

$to = "sri@11thavenuefoods.com,santosh8935@gmail.com,cvgiree@axiscreative.in";
// $to = "santosh8935@gmail.com

$subject = $data->Subject;

$message = $data->Message;
//$from = $replyto = $data->From;
$from = "santosh8935@gmail.com";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// Additional headers
if($replyto!=NULL){
	$headers .=   'Reply-To:'.$replyto. "\r\n";    
}

$headers .= 'From: "Gireesh" <'.$from . ">\r\n";

if(mail($to, $subject, $message, $headers))
	echo json_encode(array('status' => 1));
else
	echo json_encode(array('status' => 0));
	
mail('santosh8935@gmail.com', $subject, $message, $headers);

?>
