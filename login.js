document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

            const submitBtn = document.getElementById('submit-btn');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = 'Logging in...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Welcome back, ${email}! Redirecting to dashboard...`);
                window.location.href = 'index.html';
            }, 1000);
        } else {
            alert('Please fill in all fields.');
        }
    });
});
