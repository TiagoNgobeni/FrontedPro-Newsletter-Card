// write your JavaScript here

function emailValidation() {
    // Get email input
    var email = document.getElementById('user-email').value;

    // Regular valid email expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check whether the email is valid and not empty
    if (emailRegex.test(email)) {
        alert('Email validation successful!');
    }else if (email === "") {
        alert('Email cannot be empty');
    }else {
        alert('Email validation failed. Please enter a valid email address.');
    }
}