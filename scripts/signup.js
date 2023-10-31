document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.input__email');
    const signInButton = document.querySelector('.sign-up__btn');

    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    function checkInputs() {
        if (emailInput.value.trim() !== '') {
            signInButton.classList.remove('disabled');
            signInButton.disabled = false;
        } else {
            signInButton.classList.add('disabled');
            signInButton.disabled = true;
        }
    }
});

// Redirect (1 step)
function redirect1(event) {
    event.preventDefault();
    window.location.href = 'signup2.html';
}

// Redirect (2 step)
function redirect2(event) {
    event.preventDefault();
    window.location.href = 'signup3.html';
}

// Redirect (3 step)
function redirect2(event) {
    event.preventDefault();
    window.location.href = 'index.html';
}