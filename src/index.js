let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// js fo signin form
// index.js code
document.getElementById("signinButton").addEventListener("click", function() {
  window.open("signin.html", "_blank");
});
// js fo registration form
// index.js code
document.getElementById("register__button").addEventListener("click", function() {
  window.open("register.html", "_blank");
});
document.getElementById("register__button2").addEventListener("click", function() {
  window.open("register.html", "_blank");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Perform login logic here
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Example: Validate the username and password
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    // Redirect to another page
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

