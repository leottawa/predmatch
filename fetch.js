document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Example validation logic
    if (username === 'evalebel' && password === 'jeveuxfairelesexaleo') {
        messageElement.style.color = 'green';
        messageElement.textContent = 'biennnnnnnnnn';
        // Redirect to a new page after a short delay
        setTimeout(() => {
            window.location.href = 'jaimeeva.html'; // Replace 'welcome.html' with your actual page
        }, 1000);
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'reessaie woula';
    }
});