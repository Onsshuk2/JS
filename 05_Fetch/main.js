const gitHubUsersApi = 'https://api.github.com/users';

// Отримання елементів DOM
const avatarImg = document.getElementById('avatar-img');
const myLogin = document.getElementById('my-login');
const searchInput = document.getElementById('exampleInputEmail1');
const wrapper = document.querySelector('.wrapper');

// Функція для відображення даних користувача
async function showGitHubUser(login) {
    try {
        const response = await fetch(`${gitHubUsersApi}/${login}`);
        if (!response.ok) {
            throw new Error(`User not found: ${response.status}`);
        }
        const user = await response.json();

        // Оновлення елементів на сторінці
        wrapper.innerHTML = `
            <div><img src="${user.avatar_url}" alt="Avatar" width="100" /></div>
            <div><a href="${user.html_url}" target="_blank">View GitHub Profile</a></div>
            <div><strong>Name:</strong> ${user.name }</div>
            <div><strong>Blog:</strong> <a href="${user.blog}" target="_blank">${user.blog }</a></div>
            <div><strong>Login:</strong> ${user.login}</div>
            <div><strong>City:</strong> ${user.location }</div>
            <div><strong>Email:</strong> ${user.email }</div>
            <div><strong>Followers:</strong> ${user.followers}</div>
        `;
    } catch (error) {
        wrapper.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

// Відстеження введення логіна
searchInput.addEventListener('input', () => {
    const login = searchInput.value.trim();
    if (login) {
        showGitHubUser(login);
    } else {
        wrapper.innerHTML = '<p>Enter a login to search for a user.</p>';
    }
});
