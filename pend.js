
function generateSerialNumber() {
    // Generate a unique serial number, e.g., based on timestamp
    return Date.now().toString();
}
// Function to show the modal with a specific message
function showModal(message) {
    const modal = document.getElementById('myModal');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    modal.style.display = 'block';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Handle approval action
// After approval, call showModal with an appropriate message
showModal('Request Approved');

// Handle disapproval action
// After disapproval, call showModal with an appropriate message
showModal('Request Disapproved');
