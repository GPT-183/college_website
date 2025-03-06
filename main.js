document.addEventListener("DOMContentLoaded", function () {
   var user = document.querySelector("#user");
    var pass = document.querySelector("#pass");
    var btn1 = document.querySelector("#btn1");

    btn1.addEventListener("click", () => {
        // Check if username and password match the correct credentials
        if (user.value === "gpgnvm" && pass.value === "gpt@183") {
            // Redirect to the admin page if credentials are correct
            window.location.href = "admin page.html"; // Replace 'admin page.html' with the actual admin page path
        } else {
            // Disable the login button if credentials are wrong
            btn1.disabled = true;
            alert("Invalid username or password");
        }
    });
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener('click', () => {
            container.classList.add('active');
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    } else {
        console.error("One or more elements not found. Check your HTML structure.");
    }
});
