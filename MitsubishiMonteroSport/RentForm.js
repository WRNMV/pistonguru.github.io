// JavaScript Code
document.getElementById('rentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var pickupDate = document.getElementById('pickupDate').value;
    var pickupTime = document.getElementById('pickupTime').value;
    var returnDate = document.getElementById('returnDate').value;
    var returnTime = document.getElementById('returnTime').value;
    var pickupLocation = document.getElementById('pickupLocation').value;
    var vehicle = document.getElementById('vehicle').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;

    // Compose the template parameters for EmailJS
    var templateParams = {
        firstName: firstName,
        lastName: lastName,
        pickupDate: pickupDate,
        pickupTime: pickupTime,
        returnDate: returnDate,
        returnTime: returnTime,
        pickupLocation: pickupLocation,
        phoneNumber: phoneNumber,
        email: email,
        vehicle: vehicle
    };

    // Send the email using EmailJS
    emailjs.send('service_17q3xgs', 'template_b5j0kqt', templateParams)
        .then(function(response) {
            // Email sent successfully
            alert('Thank you, ' + firstName + '! Your car rental request has been submitted.');
            // Reset the form
            document.getElementById('rentForm').reset();
        }, function(error) {
            // An error occurred while sending the email
            alert('Oops! There was an error sending the email. Please try again later.');
        });
});

// Set the minimum pickup date in the date input field on page load
var currentDate = new Date();
var minPickupDate = new Date();
minPickupDate.setDate(currentDate.getDate() + 2);
document.getElementById('pickupDate').setAttribute('min', minPickupDate.toISOString().split('T')[0]);

// Add event listener to the pickupDate input to update the minimum returnDate
document.getElementById('pickupDate').addEventListener('change', function(event) {
    // Get the selected pickup date
    var selectedPickupDate = new Date(event.target.value);
    // Calculate the minimum return date (pickup date + 1 day)
    var minReturnDate = new Date(selectedPickupDate);
    minReturnDate.setDate(selectedPickupDate.getDate() + 1);
    // Set the minimum return date in the returnDate input
    document.getElementById('returnDate').setAttribute('min', minReturnDate.toISOString().split('T')[0]);
});
