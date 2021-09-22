const form = document.querySelector('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

document.querySelector('button').addEventListener('click', validateForm);

firstNameInput.addEventListener('blur', validateForm);
lastNameInput.addEventListener('blur', validateForm);
emailInput.addEventListener('blur', validateForm);
passwordInput.addEventListener('blur', validateForm);


function validateForm(e) {
    resetErrorBorder(firstNameInput);
    resetErrorBorder(lastNameInput);
    resetErrorBorder(emailInput);
    resetErrorBorder(passwordInput);

    resetErrorMessages();

    if (firstNameInput.value.trim() === "") {
        showInputError(firstNameInput, 'First Name cannot be empty');
    }

    if (lastNameInput.value.trim() === "") {
        showInputError(lastNameInput, 'Last Name cannot be empty');
    }

    if (emailInput.value.trim() === "") {
        showInputError(emailInput, 'Email cannot be empty');
    } else {
        let regEx = /^\w+@\w+\.\w{3}$/;
        let result = regEx.test(emailInput.value.trim());
        if (!result) {
            showInputError(emailInput, 'Looks like this is not an email');
        }
    }

    if (passwordInput.value.trim() === "") {
        showInputError(passwordInput, 'Password cannot be empty');
    }
    e.preventDefault();
}

function resetErrorBorder(inputEl) {
    inputEl.classList.remove("input-error");
}

function resetErrorMessages() {
    let errorMsg = document.querySelectorAll('div.error-message');
    errorMsg.forEach((element => {
        element.remove();
    }))
}

function showInputError(inputEl, message) {
    inputEl.classList.add("input-error");
    let errorMsg = inputEl + "Error";
    errorMsg = document.createElement("div");
    errorMsg.classList.add("error-message");
    errorMsg.textContent = message;
    form.insertBefore(errorMsg, inputEl.nextElementSibling);
}
