let correctUsername = false;
let correctPassword = false;

// Check each letter to be upper or lower case
function isAlphabetOnly(string) {
    // for (let i = 0; i < string.length; i++) {
    //     let code = string.charCodeAt(i);
    //     if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)) {
    //         // Not a letter
    //         return false; 
    //     }
    // }
    // // All characters are letters
    // return true;

    // Convert to Array and filter letters that are not alphabets
    const lettersOnly = Array.from(string).filter(char => char.toLowerCase() !== char.toUpperCase());
    // Comparing the length of the filtered array with the length of the word to check if it contains only alphabets
    return lettersOnly.length === string.length;
}

document.getElementById("form").addEventListener("submit", function(event) {

    // Validate Username
    const username = document.getElementById("username").value.trim();
    const usernameError = document.getElementById("usernameError");
    // const usernameRegex = /^(?=.{8,16}$)[a-zA-Z]+$/;
    // if (!usernameRegex.test(username))
    if ((username.length < 8 || username.length > 16) || !isAlphabetOnly(username)) {
        usernameError.style.display = "block";
        correctUsername = false;
    }
    else {
        usernameError.style.display = "none";
        correctUsername = true;
    }

    // Validate Password
    const password = document.getElementById("password").value.trim();
    const passwordError = document.getElementById("passwordError");
    // const passwordRegex = /^.{12,16}$/;
    // if (!passwordRegex.test(password))
    if (password.length < 12 || password.length > 16) {
        passwordError.style.display = "block";
        correctPassword = false;
    }
    else {
        passwordError.style.display = "none";
        correctPassword = true;
    }

    // Display Status
    if (!correctUsername || !correctPassword) {
        event.preventDefault();
    }
    else {
        const successful = document.getElementById("successful");
        successful.style.display = "block";
    }
});