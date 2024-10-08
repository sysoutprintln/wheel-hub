function showErrorNotification(message) {
    var notification = document.getElementById("error-notification");
    notification.querySelector("p").innerText = message;
    notification.style.display = "block";
}

function hideErrorNotification() {
    document.getElementById("error-notification").style.display = "none";
}

function showSuccessNotification(message) {
    var notification = document.getElementById("success-notification");
    notification.querySelector("p").innerText = message;
    notification.style.display = "block";
}

function hideSuccessNotification() {
    document.getElementById("success-notification").style.display = "none";
}

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirm-password").value.trim();
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;

    if (username.length < 3) {
        showErrorNotification("Username must be at least 3 characters long.");
    } else if (!email.includes('@') || !email.includes('.')) {
        showErrorNotification("Email must be valid and contain '@' and '.'.");
    } else if (password.length < 8) {
        showErrorNotification("Password must be at least 8 characters long.");
    } else if (password !== confirmPassword) {
        showErrorNotification("Password and confirm password must match.");
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        showErrorNotification("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
    } else if (gender === "") {
        showErrorNotification("Gender must be selected.");
    } else if (dob === "") {
        showErrorNotification("Date of birth must be filled in.");
    } else {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        showSuccessNotification("Registration successful! You will be redirected to the homepage.");

        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
    }
});
