document.addEventListener('DOMContentLoaded', function() {

    const user = JSON.parse(localStorage.getItem('User'));

    if (!user) {
        alert('Користувач не знайдений у localStorage');
        return;
    }
    const tableBody = document.querySelector('#userTableBody');

    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = user.name;

    const sernameCell = document.createElement('td');
    sernameCell.textContent = user.sername;

    const usernameCell = document.createElement('td');
    usernameCell.textContent = user.username;

    const emailCell = document.createElement('td');
    emailCell.textContent = user.email;

    const loginCell = document.createElement('td');
    loginCell.textContent = user.login;

    const passwordCell = document.createElement('td');
    passwordCell.textContent = user.password;

    row.appendChild(nameCell);
    row.appendChild(sernameCell);
    row.appendChild(usernameCell);
    row.appendChild(emailCell);
    row.appendChild(loginCell);
    row.appendChild(passwordCell);

    tableBody.appendChild(row);
});
