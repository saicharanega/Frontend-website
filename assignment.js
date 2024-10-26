document.addEventListener("DOMContentLoaded", () => {

    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", () => {

        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);


        togglePassword.textContent = type === "password" ? "Show" : "Hide";
    });


    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const onlineID = document.getElementById("onlineID").value.trim();
        const password = passwordInput.value.trim();


        if (!onlineID || !password) {
            alert("Please enter both your Online ID and Password.");
            return;
        }


        if (onlineID === "user123" && password === "password123") {
            alert("Login Successful!");

        } else {
            alert("Invalid Online ID or Password. Please try again.");
        }
    });
});