const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');
const paragraph = document.getElementById('s')
const submitButton = document.getElementById('button');

let passwordValue = document.getElementById("password").value;
let passwordConfirmValue = document.getElementById("confirm-password").value;

password.addEventListener("keyup", function() {
    passwordValue = document.getElementById("password").value;
    passwordConfirmValue = document.getElementById("confirm-password").value;
    if (passwordValue != passwordConfirmValue) {
        password.classList.add("password-error");
        passwordConfirm.classList.add("password-error");
        paragraph.classList.add("password-error-message-shown");
        submitButton.setAttribute("disabled", "disabled")
        submitButton.classList.add("button-error");
    } else {
        password.classList.remove("password-error");
        passwordConfirm.classList.remove("password-error");
        paragraph.classList.remove("password-error-message-shown");
        submitButton.removeAttribute("disabled")
        submitButton.classList.remove("button-error");
    }
  });

  passwordConfirm.addEventListener("keyup", function() {
    passwordValue = document.getElementById("password").value;
    passwordConfirmValue = document.getElementById("confirm-password").value;
    if (passwordValue != passwordConfirmValue) {
        password.classList.add("password-error");
        passwordConfirm.classList.add("password-error");
        paragraph.classList.add("password-error-message-shown");
        submitButton.setAttribute("disabled", "disabled")
        submitButton.classList.add("button-error");
    } else {
        password.classList.remove("password-error");
        passwordConfirm.classList.remove("password-error");
        paragraph.classList.remove("password-error-message-shown");
        submitButton.removeAttribute("disabled")
        submitButton.classList.remove("button-error");
    }
  });