// Get elements
const registerButton = document.getElementById('registerBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Event listener for the register button
registerButton.addEventListener('click', function() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    // Check if fields are empty
    if (emailValue === '' || passwordValue === '' || confirmPasswordValue === '') {
        alert('Please fill in all fields!');
    } else if (passwordValue !== confirmPasswordValue) {
        alert('Passwords do not match!');
    } else {
        alert('Registration successful!');
        // You can redirect to another page after registration here, like:
        // window.location.href = "login.html";
    }
});
