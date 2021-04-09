const form = document.querySelector('.form');
const emailInput = document.querySelector('.email');
const error = document.querySelector('.form-error');

form.setAttribute("novalidate", "");

const showError  = (string) => {
    emailInput.classList.add('not-valid');
    error.textContent = string;
    error.classList.remove('hidden');
};

const removeError = () => {
    emailInput.classList.remove('not-valid');
    error.classList.add('hidden');
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!emailInput.value) {
        showError("Doh! you forgot to add your email");
    } else if (!isEmail(emailInput.value)) {
        showError("Please provide a valid email address");
    } else {
        emailInput.value = "";
    }
});

emailInput.addEventListener('input', e => {
    if (isEmail(emailInput.value)) {
        removeError();
    }
});