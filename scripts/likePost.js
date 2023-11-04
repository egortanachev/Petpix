// Находим все элементы с классом '.post__info-like'
const likeButtons = document.querySelectorAll('.post__info-like');
// Находим все элементы с классом '.post__photo'
const likePhotos = document.querySelectorAll('.post__photo');

// Перебираем найденные элементы и добавляем обработчик события click
likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', () => {
        // Находим родительский элемент '.post' при помощи метода closest
        const post = likeButton.closest('.post');
        
        // Используем метод toggle, чтобы добавить или удалить класс 'liked' при каждом клике
        if (post) {
            post.classList.toggle('liked');
        }
    });
});

// Перебираем найденные элементы и добавляем обработчик события dblclick
likePhotos.forEach(likePhoto => {
    let timeout;
    let clicked = 0;

    likePhoto.addEventListener('click', () => {
        clicked++;

        if (clicked === 1) {
            timeout = setTimeout(() => {
                clicked = 0;
            }, 300); // Задержка для определения двойного клика
        } else {
            clearTimeout(timeout);
            clicked = 0;

            // Находим родительский элемент '.post' при помощи метода closest
            const post = likePhoto.closest('.post');

            // Используем метод toggle, чтобы добавить или удалить класс 'liked' при двойном клике
            if (post) {
                post.classList.toggle('liked');
            }
        }
    });
});