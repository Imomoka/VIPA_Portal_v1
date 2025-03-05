let passwordToggle;
let passwordField; 

document.addEventListener("DOMContentLoaded", () => {
    passwordToggle = document.getElementById("showPassword");
    if(passwordToggle){
        passwordToggle.checked = false;
        document.addEventListener("change", showPassword);
    }
});

function showPassword(){
    passwordField = document.getElementById("user_password");
    if(passwordToggle.checked){
        passwordField.type='text';
    }
    else{
        passwordField.type = 'password';
    }
}


