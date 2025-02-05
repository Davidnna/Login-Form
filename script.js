let correctUsername = false;
let correctPassword = false;

document.getElementById("form").addEventListener("submit", function(event) {

    const username = document.getElementById("username");
    const usernameError = document.getElementById("usernameError");
    const usernameRegex = /^(?=.{8,16}$)[a-zA-Z]+$/;
    if (!usernameRegex.test(username.value)) {
        usernameError.style.display = "block";
        correctUsername = false;
    }
    else {
        usernameError.style.display = "none";
        correctUsername = true;
    }

    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^.{12,16}$/;
    if (!passwordRegex.test(password.value)) {
        passwordError.style.display = "block";
        correctPassword = false;
    }
    else {
        passwordError.style.display = "none";
        correctPassword = true;
    }

    if(!correctUsername || !correctPassword) {
        event.preventDefault();
    }
});