// Находим все элементы с классом '.header__action-favorite'
const subscribeButton = document.querySelector('.header__action-favorite');

// Перебираем найденные элементы и добавляем обработчик события click
subscribeButton.addEventListener('click', () => {
    // Находим родительский элемент '.post' при помощи метода closest
    const body = document.querySelector('.body');
    
    // Используем метод toggle, чтобы добавить или удалить класс 'favorite' при каждом клике
    if (body) {
        body.classList.toggle('favorite');
    }
});