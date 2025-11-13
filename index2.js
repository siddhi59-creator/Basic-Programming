// Sigma/Login Project

// Function: Signup
function signup(username) {
  // Predefined usernames
  let users = ["Rose", "Emma", "Issac", "Sophia"];

  // Check if username already exists
  if (users.includes(username)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(username);
    return "Sigma Successful, Please Login";
  }
}

// Function: Login
function login(username, password) {
  // Predefined usernames
  let users = ["Rose", "Emma", "Issac", "Sophia"];

  if (!users.includes(username)) {
    return "User Not Found, Please Signup";
  } else if (password !== "Emp@123") {
    return "Wrong Password...";
  } else {
    return "Login Successful...";
  }
}

// Test Cases
console.log("=== Signup Tests ===");
console.log(signup("Emma"));   // User Already Registered, Please Login
console.log(signup("David"));  // Sigma Successful, Please Login

console.log("\n=== Login Tests ===");
console.log(login("Emma", "Emp@123"));   // Login Successful...
console.log(login("Rose", "Emp@123"));  // User Not Found, Please Signup
console.log(login("Issac", "Pass123"));   // Wrong Password...
