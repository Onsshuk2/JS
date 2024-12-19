function formHandler2(event) {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('remember').checked; 

    // Перевіряємо, чи всі поля заповнені
    if (!email || !password) {
        alert('Введіть email та пароль.');
        return;
    }

    // Симуляція з локальним сховищем
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email);

    if (!user) {
    
        alert('Користувача не знайдено. Спершу зареєструйтесь.');
        return;
    }

    if (user.password !== password) {
        alert('Невірний пароль. Спробуйте ще раз.');
        return;
    }

    if (rememberMe) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    alert(`Вітаємо, ${user.email}! Ви успішно увійшли.`);
    window.location = '/Final/прогноз/index.html';
}

const forgot = document.getElementById('forgot');

forgot.addEventListener('click', function(event) {

    event.preventDefault();
    alert('Вибачте, нічим не можемо допомогти');
});
