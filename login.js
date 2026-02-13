document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation example
        if (email && password) {
            // Simulate API call or authentication check
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

            // Success feedback
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = 'Logging in...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Welcome back, ${email}! Redirecting to dashboard...`);
                window.location.href = 'index.html'; // Redirect to home
            }, 1000);
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Input animation enhancement (if labels don't float correctly on autocomplete)
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value) {
                input.classList.add('has-content');
            } else {
                input.classList.remove('has-content');
            }
        });
    });
});
