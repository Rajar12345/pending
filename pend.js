// Attach a click event listener to each "Submit" button
const submitButtons = document.querySelectorAll('.submit');
submitButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const approveCheckbox = document.querySelector(#approve-checkbox${index + 1});
        const disapproveCheckbox = document.querySelector(#disapprove-checkbox${index + 1});
        const serialNumberSpan = document.querySelector(#serialNumber${index + 1});
        
        if (approveCheckbox.checked) {
            // Handle approval action (e.g., remove the row)
            button.closest('tr').remove();
            // Generate a unique serial number (you can customize this logic)
            const serialNumber = generateSerialNumber();
            // Display the generated serial number
            serialNumberSpan.textContent = serialNumber;
        } else if (disapproveCheckbox.checked) {
            // Handle disapproval action (e.g., mark as disapproved)
            // You can add your disapproval logic here
        }
    });
});

// Function to generate a serial number (customize as needed)
function generateSerialNumber() {
    // Generate a unique serial number, e.g., based on timestamp
    return Date.now().toString();
}