// Button disabled
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.input__email');
    const passwordInput = document.querySelector('.input__password');
    const signInButton = document.querySelector('.sign-in__btn');

    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    function checkInputs() {
        if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            signInButton.classList.remove('disabled');
            signInButton.disabled = false;
        } else {
            signInButton.classList.add('disabled');
            signInButton.disabled = true;
        }
    }
});

// Show password
document.addEventListener('DOMContentLoaded', function() {
    const passwordControl = document.querySelector('.sign-in__password-show');
    const passwordInput = document.querySelector('.input__password');

    passwordControl.addEventListener('click', event => {
        if (passwordInput.getAttribute('type') === 'password') {
            passwordControl.classList.add('view');
            passwordInput.setAttribute('type', 'text');
        } else {
            passwordControl.classList.remove('view');
            passwordInput.setAttribute('type', 'password');
        }
        event.preventDefault();
    });
});

// Redirect
function redirect(event) {
    event.preventDefault();
    window.location.href = 'index.html';
}