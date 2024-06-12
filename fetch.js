
function updateContent() {
    const contentDiv = document.getElementById('content');
    const now = new Date().toLocaleTimeString();
    contentDiv.innerHTML = `Function executed at ${now}`;
    console.log(`Function executed at ${now}`);
}

// Run the function
updateContent();

// Export the function for testing
module.exports = updateContent;