// Находим все элементы с классом '.post__user-subscribe'
const subscribeButtons = document.querySelectorAll('.post__user-subscribe');

// Перебираем найденные элементы и добавляем обработчик события click
subscribeButtons.forEach(subscribeButton => {
    subscribeButton.addEventListener('click', () => {
        // Находим родительский элемент '.post' при помощи метода closest
        const post = subscribeButton.closest('.post');
        
        // Используем метод toggle, чтобы добавить или удалить класс 'favorite' при каждом клике
        if (post) {
            post.classList.toggle('favorite');
        }
    });
});