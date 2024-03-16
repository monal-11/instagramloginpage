document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var messageContainer = document.getElementById("message");
  
    messageContainer.innerHTML = "";


    if (username === "user" && password === "password") {
      showMessage("Login successful!", "green");
    } else {
      showMessage("Invalid username or password. Try again", "red");
    }
  });
  
  function showMessage(message, color) {
    var messageContainer = document.getElementById("message");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.style.color = color;
    messageContainer.appendChild(messageElement);
  }
  