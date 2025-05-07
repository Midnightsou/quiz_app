// Get references to the input fields and error message
const createAccountForm = document.getElementById("create-account-form");
const newUsernameInput = document.getElementById("create-username");
const newPasswordInput = document.getElementById("create-password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");

// Event listener for form submission
createAccountForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const username = newUsernameInput.value.trim();
  const password = newPasswordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // Basic validation
  if (!username || !password || !confirmPassword) {
    displayError("All fields are required.");
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    displayError("Passwords do not match!");
    return;
  }

  // Check if username already exists
  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username]) {
    displayError("Username already exists. Please choose a different one.");
    return;
  }

  // Save the new user to localStorage
  // WARNING: In a real application, never store passwords in plain text or localStorage.
  // Always hash passwords and use secure storage mechanisms.
  users[username] = { password }; // Hash the password before saving in a real app
  localStorage.setItem("users", JSON.stringify(users));

  // Redirect to the sign-in page
  alert("Account created successfully!");
  window.location.href = "signin.html";
});

// Function to display error messages
function displayError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  errorMessage.setAttribute("aria-live", "assertive"); // Ensure accessibility for screen readers
  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 3000); // Hide the error message after 3 seconds
}
