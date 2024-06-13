document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Example validation logic
    if (username === 'leottawa' && password === 'mdp') {
        messageElement.style.color = 'green';
        messageElement.textContent = 'biennnnnnnnnn';
        // Redirect to a new page after a short delay
        setTimeout(() => {
            window.location.href = 'predictions.html'; // Replace 'welcome.html' with your actual page
        }, 1000);
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'reessaie woula';
    }
});