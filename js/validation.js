$(document).ready(function () {
    $('#contactForm').on('submit', function (event) {
        event.preventDefault();

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();

        if (!name || !email || !message) {
            $('#formMessage').html('<p id="error" class="show">All fields are required.</p>');
            return;
        }

        if (!validateEmail(email)) {
            $('#formMessage').html('<p id="error" class="show">Please enter a valid email.</p>');
            return;
        }

        $('#formMessage').html('<p>Form submitted successfully!</p>').hide().fadeIn(1000);
        this.reset();  // Clear form after submission
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
});