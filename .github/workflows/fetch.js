async function fetchData() {
    try {
        // Your code here
        console.log("Function executed at", new Date().toLocaleTimeString());
        // Example: Fetch data from an API
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log('Data fetched:', data);
    } catch (error) {
        console.error('Error executing function:', error);
    }
}

// Run the function
fetchData();