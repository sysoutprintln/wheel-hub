
const registeredUsername = localStorage.getItem('username');
const registeredEmail = localStorage.getItem('email');
const registeredPassword = localStorage.getItem('password');

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

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var usernameEmail = document.getElementById("username-email").value.trim();
    var password = document.getElementById("password").value.trim();

    if (usernameEmail === "") {
        showErrorNotification("Username or email must be provided.");
    } else if (!usernameEmail.includes('@') && !usernameEmail.includes('.')) {
        showErrorNotification("If entering an email, it must contain '@' and '.'.");
    } else if (usernameEmail.length < 3 && !usernameEmail.includes('@')) {
        showErrorNotification("Username must be at least 3 characters long.");
    } else if (password.length < 8) {
        showErrorNotification("Password must be at least 8 characters long.");
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        showErrorNotification("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
    } else if ((usernameEmail === registeredUsername || usernameEmail === registeredEmail) && password === registeredPassword) {
        localStorage.setItem('username', registeredUsername);
        localStorage.setItem('email', registeredEmail);
        showSuccessNotification("Login successful! You will be redirected to the homepage.");

        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
    } else {
        showErrorNotification("Invalid username/email or password.");
    }
});
