document.addEventListener('DOMContentLoaded', function () {
    // Get the form, email input, and message div
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('.newsletter form input[name="email"]');
    const messageDiv = document.querySelector('.newsletter .message');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the email input value and trim whitespace
        const email = emailInput.value.trim();

        // Check if the email is not empty
        if (email) {
            // Display the success message with green color
            messageDiv.innerHTML = `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`;
            messageDiv.style.color = 'green';
        } else {
            // Display the error message with red color
            messageDiv.innerHTML = 'Please enter a valid email address.';
            messageDiv.style.color = 'red';
        }

        // Clear the input field
        emailInput.value = '';
    });
});
