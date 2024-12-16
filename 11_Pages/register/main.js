document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameF').value;
    const sername = document.getElementById('nameS').value;
    const username = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const passwordR = document.getElementById('passwordR').value;

    if (password !== passwordR) {
        alert('Паролі не співпадають. Будь ласка, спробуйте ще раз.');
        return;
    }

    const obgUser = {
        name: name,
        sername: sername,
        username: username,
        email: email,
        login: login,
        password: password
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(obgUser);

    localStorage.setItem('users', JSON.stringify(users));

    alert('Користувач зареєстрований!');
});

    function goToLogin() {
        window.location = '/Homework/11_Pages/index.html'; }