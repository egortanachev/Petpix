// Show password
document.addEventListener('DOMContentLoaded', function() {
    const passwordControl = document.querySelector('.password-show');
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