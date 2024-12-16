function formHandler2(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Введіть email та пароль.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users'));

    if (!users) {
        alert('Немає зареєстрованих користувачів. Будь ласка, зареєструйтеся.');
        window.location = '/Homework/11_Pages/register/index.html';
        return;
    }

    const user = users.find(user => user.email === email);

    if (!user) {
        alert('Користувача з таким email не знайдено. Будь ласка, зареєструйтеся.');
        return;
    }

    if (user.password !== password) {
        alert('Неправильний пароль. Спробуйте ще раз.');
        return;
    }

    
    alert(`Вітаємо, ${user.email}! Ви успішно увійшли.`);
    window.location = '/Homework/11_Pages/home/index.html';
}

function goToRegistration() {
    window.location = '/Homework/11_Pages/register/index.html'; }

