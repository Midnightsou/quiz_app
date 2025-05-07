// Get references to the input fields and error message
const signinForm = document.getElementById("signin-form");
const usernameInput = document.getElementById("signin-username");
const passwordInput = document.getElementById("signin-password");
const errorMessage = document.getElementById("error-message");

// Event listener for form submission
signinForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Basic validation
  if (!username || !password) {
    displayError("Please fill in all fields.");
    return;
  }

  // Check if the username exists and the password matches
  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (!users[username] || users[username].password !== password) {
    displayError("Invalid username or password!");
    return;
  }

  // Save the current user to localStorage
  localStorage.setItem("currentUser", username);

  // Debugging: Log before redirection
  console.log("Sign in successful! Redirecting to index.html...");

  // Redirect to the main quiz page
  window.location.href = "index.html";
});

// Function to display error messages
function displayError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 3000); // Hide the error message after 3 seconds
}
