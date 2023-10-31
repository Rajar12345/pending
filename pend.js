// Step 1: Add event listener to "Approve" button
const approveButtons = document.querySelectorAll('.approve-button');
approveButtons.forEach(button => {
  button.addEventListener('click', handleApproval);
});

function handleApproval(event) {
  // Step 2: Retrieve row data
  const row = event.target.closest('tr');
  const leaveId = row.querySelector('td:nth-child(1)').textContent;
  const visitPlace = row.querySelector('td:nth-child(2)').textContent;
  const reason = row.querySelector('td:nth-child(3)').textContent;
  const leaveType = row.querySelector('td:nth-child(4)').textContent;
  const from = row.querySelector('td:nth-child(5)').textContent;
  const to = row.querySelector('td:nth-child(6)').textContent;

  // Step 3: Remove row from table
  row.remove();

  // Step 4: Generate serial number
  const serialNumber = generateSerialNumber();

  // Step 5: Store serial number and request details
  storeApprovalDetails(serialNumber, leaveId, visitPlace, reason, leaveType, from, to);

  // Display serial number to the student
  alert(Your request has been approved. Serial number: ${serialNumber});
}

function generateSerialNumber() {
  // Generate a unique identifier (e.g., timestamp or random number)
  // You can use a library or custom logic to generate the serial number
  // For simplicity, let's use the current timestamp
  const timestamp = Date.now();
  return SN-${timestamp};
}

function storeApprovalDetails(serialNumber, leaveId, visitPlace, reason, leaveType, from, to) {
  // Store the approval details in a database or any other persistent storage
  // You can use AJAX or any backend technology to handle the storage process
  // Here, we'll just log the details to the console
  console.log(Serial Number: ${serialNumber});
  console.log(Leave ID: ${leaveId});
  console.log(Visit Place: ${visitPlace});
  console.log(Reason: ${reason});
  console.log(Leave Type: ${leaveType});
  console.log(From: ${from});
  console.log(To: ${to});
}
