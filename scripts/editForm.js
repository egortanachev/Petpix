// Button disabled

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.btn');
    const requiredInputs = document.querySelectorAll('input[required]');

    requiredInputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    const textarea = document.querySelector('textarea.input');

    textarea.addEventListener('input', function() {
        checkInputs();
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


// Pop up
const popupOpen = document.querySelector('.pop-up__open');
const popupClose = document.querySelector('.pop-up__close');
const popupClose2 = document.querySelector('.popup__dark');

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupClose2.addEventListener('click', closePopup);

function openPopup(event){
    event.preventDefault();
    document.querySelector('.body').classList.toggle('modal')

    // Найти элемент <meta name="theme-color">
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (metaThemeColor) {
        // Изменить содержимое атрибута content на новый цвет (например, #ff0000)
        metaThemeColor.setAttribute('content', '#ff0000');
    }
}

function closePopup(event){
    event.preventDefault();
    
    document.querySelector('.body').classList.add('modal__close');
    setTimeout(() => {
        document.querySelector('.body').classList.remove('modal__close');
        document.querySelector('.body').classList.toggle('modal')
    }, 500);

    // Найти элемент <meta name="theme-color">
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (metaThemeColor) {
        // Изменить содержимое атрибута content на новый цвет (например, #ff0000)
        metaThemeColor.setAttribute('content', '#ffffff');
    }
}


// Redirect EDIT
function redirectEdit(event) {
    event.preventDefault();
    window.location.href = 'profile.html';
}