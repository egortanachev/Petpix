// Button disabled

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.btn');
    const requiredInputs = document.querySelectorAll('input[required]');

    requiredInputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    function checkInputs() {
        let allValid = true;

        requiredInputs.forEach(input => {
            if (input.value.trim() === '') {
                allValid = false;
            }
        });

        if (allValid) {
            submitButton.classList.remove('disabled');
            submitButton.disabled = false;
        } else {
            submitButton.classList.add('disabled');
            submitButton.disabled = true;
        }


        if (this.value.trim() !== '') {
            this.classList.remove('initial');
        } else {
            this.classList.add('initial');
        }
    }

    requiredInputs.forEach(input => {
        input.classList.add('initial');
    });
});

// Redirect SIGN IN
function redirect(event) {
    event.preventDefault();
    window.location.href = 'index.html';
}

// Redirect SIGN UP (1 step)
function redirect1(event) {
    event.preventDefault();
    window.location.href = 'signup2.html';
}

// Redirect SIGN UP (2 step)
function redirect2(event) {
    event.preventDefault();
    window.location.href = 'signup3.html';
}

// Redirect SIGN UP (3 step)
function redirect3(event) {
    event.preventDefault();
    window.location.href = 'index.html';
}