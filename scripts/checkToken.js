// Проверка токена и редирект

if (localStorage.getItem('token') != 'True'){
    window.location.href = 'signin.html';
}