<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $pickupDate = $_POST['pickupDate'];
    $pickupTime = $_POST['pickupTime'];
    $returnDate = $_POST['returnDate'];
    $returnTime = $_POST['returnTime'];
    $pickupLocation = $_POST['pickupLocation'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phoneNumber = $_POST['phoneNumber'];
    $email = $_POST['email'];

    // Create the email message
    $to = 'nepomucenorovy@gmail.com';
    $subject = 'Car Rental Request';
    $message = 'Pickup Date: ' . $pickupDate . "\n" .
               'Pickup Time: ' . $pickupTime . "\n" .
               'Return Date: ' . $returnDate . "\n" .
               'Return Time: ' . $returnTime . "\n" .
               'Pickup Location: ' . $pickupLocation . "\n" .
               'Name: ' . $firstName . ' ' . $lastName . "\n" .
               'Phone Number: ' . $phoneNumber . "\n" .
               'Email: ' . $email;

    // Send the email
    if (mail($to, $subject, $message)) {
        // Email sent successfully
        echo json_encode(array('status' => 'success', 'message' => 'Form submitted successfully!'));
    } else {
        // Failed to send email
        echo json_encode(array('status' => 'error', 'message' => 'Failed to submit the form. Please try again later.'));
    }
} else {
    // Handle invalid form submission
    echo json_encode(array('status' => 'error', 'message' => 'Invalid form submission.'));
}
?>
