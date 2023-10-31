// function submitForm() {
// // Get the checkboxes
// var approveCheckbox = document.getElementById("checkbox1");
// var disapproveCheckbox = document.getElementById("checkbox2");

// // Check if the checkboxes are checked
// var isApproveChecked = approveCheckbox.checked;
// var isDisapproveChecked = disapproveCheckbox.checked;

// // Determine the action based on the checked checkboxes
// if (isApproveChecked) {
//     // Handle approval logic
//     userDatabase[num][6]=("Approved");
// } if (isDisapproveChecked) {
//     // Handle disapproval logic
//     userDatabase[num][6]=("Disapproved");
// }
// }
function submitForm() {
    // Get the checkboxes for the specific row
    var approveCheckbox = document.getElementById("checkbox1_0");
    var disapproveCheckbox = document.getElementById("checkbox2_0");

    if (!approveCheckbox || !disapproveCheckbox) {
        console.error("Checkboxes not found for row index ");
        return; // exit the function if checkboxes are not found
    }

    // Check if the checkboxes are checked
    var isApproveChecked = approveCheckbox.checked;
    var isDisapproveChecked = disapproveCheckbox.checked;

    // Determine the action based on the checked checkboxes
    if (isApproveChecked) {
        // Handle approval logic
        userDatabase[0][6] = "Approved";
    } else if (isDisapproveChecked) {
        // Handle disapproval logic
        userDatabase[0][6] = "Disapproved";
    }

    // Log the updated userDatabase (you can remove this in your actual implementation)
    console.log(userDatabase);
}
