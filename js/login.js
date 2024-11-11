// Get elements
const loginButton = document.getElementById('loginBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Event listener for the login button
loginButton.addEventListener('click', function() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Check if fields are empty
    if (emailValue === '' || passwordValue === '') {
        alert('Please fill in both email/username and password!');
    } else {
        alert('Logged in successfully!');
        // You can redirect to another page after login here, like:
        // window.location.href = "dashboard.html";
    }
});
