const fetch = require('node-fetch');

function updateContent() {
    const now = new Date().toLocaleTimeString();
    console.log(`Function executed at ${now}`);
    // Example: Fetch data from an API
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log('Data fetched:', data))
        .catch(error => console.error('Error fetching data:', error));
}

// Run the function immediately
updateContent();

// Set an interval to run the function every 5 seconds for 1 minute
const intervalId = setInterval(updateContent, 5000);

// Stop the interval after 1 minute to avoid overlapping executions
setTimeout(() => clearInterval(intervalId), 60000);