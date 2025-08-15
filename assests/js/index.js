document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from submitting immediately

        const nameValue = nameField.value.trim();
        const emailValue = emailField.value.trim();
        const messageValue = messageField.value.trim();

        console.log("Name entered:", nameValue);
        console.log("Email entered:", emailValue);
        console.log("Message entered:", messageValue);

        let isValid = true;
        let errorMessage = "";

        if (nameValue === "") {
            isValid = false;
            errorMessage += "Please enter your name.\n";
            console.log("Validation failed: Name is empty");
        }

        if (emailValue === "") {
            isValid = false;
            errorMessage += "Please enter your email.\n";
            console.log("Validation failed: Email is empty");
        } else if (!isValidEmail(emailValue)) {
            isValid = false;
            errorMessage += "Please enter a valid email address.\n";
            console.log("Validation failed: Email format is invalid");
        }

        if (messageValue === "") {
            isValid = false;
            errorMessage += "Please enter your message.\n";
            console.log("Validation failed: Message is empty");
        }

        if (!isValid) {
            alert(errorMessage);
            return;
        }
        alert("Message sent successfully!");
        form.reset();
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});