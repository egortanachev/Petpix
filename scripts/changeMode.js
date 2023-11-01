 // Функция для изменения класса в зависимости от URL
 function changeClassBasedOnURL() {
    const currentURL = window.location.href;
    const feedModeElement = document.querySelector('.feed__mode');

    if (currentURL.includes('#all')) {
        feedModeElement.classList.remove('mode1');
        feedModeElement.classList.add('mode2');
    } else {
        feedModeElement.classList.remove('mode2');
        feedModeElement.classList.add('mode1');
    }
}

// Функция-обработчик клика по ссылкам
function handleLinkClick(event) {
    // Отменяем стандартное действие ссылки
    event.preventDefault();

    // Получаем href ссылки, по которой кликнули
    const href = event.target.getAttribute('href');

    // Изменяем URL страницы
    window.location.hash = href;

    // Вызываем функцию для изменения класса
    changeClassBasedOnURL();
}

// Находим все ссылки с классом feed__title
const feedTitleLinks = document.querySelectorAll('.feed__title');

// Повешаем обработчик клика на каждую ссылку
feedTitleLinks.forEach(link => {
    link.addEventListener('click', handleLinkClick);
});

// Вызываем функцию при загрузке страницы, чтобы установить класс на основе URL
changeClassBasedOnURL();