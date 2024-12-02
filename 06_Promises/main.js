const usersApiUrl = 'https://jsonplaceholder.typicode.com/users';
const todosApiUrl = 'https://jsonplaceholder.typicode.com/todos';

const usersList = document.getElementById('users-list');
const todosList = document.getElementById('todos-list');

// Функція для завантаження та відображення користувачів
async function fetchAndDisplayUsers() {
    try {
        const response = await fetch(usersApiUrl);
        if (!response.ok) throw new Error('Failed to fetch users');
        
        const users = await response.json();

        usersList.innerHTML = ''; // Очищення списку користувачів
        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.textContent = user.name;
            userItem.dataset.userId = user.id;

            // Додавання обробника події
            userItem.addEventListener('click', () => fetchAndDisplayTodos(user.id, userItem));
            
            usersList.appendChild(userItem);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        usersList.innerHTML = '<li>Error loading users</li>';
    }
}

// Функція для завантаження та відображення справ
async function fetchAndDisplayTodos(userId, selectedUserItem) {
    try {
        // Виділення обраного користувача
        document.querySelectorAll('#users-list li').forEach(item => item.classList.remove('selected'));
        selectedUserItem.classList.add('selected');

        const response = await fetch(`${todosApiUrl}?userId=${userId}`);
        if (!response.ok) throw new Error('Failed to fetch todos');
        
        const todos = await response.json();

        todosList.innerHTML = ''; // Очищення списку справ
        if (todos.length === 0) {
            todosList.innerHTML = '<li>No todos found for this user.</li>';
            return;
        }

        todos.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.textContent = `${todo.title} (${todo.completed ? 'Completed' : 'Pending'})`;
            todosList.appendChild(todoItem);
        });
    } catch (error) {
        console.error('Error fetching todos:', error);
        todosList.innerHTML = '<li>Error loading todos</li>';
    }
}

// Завантаження користувачів після завантаження сторінки
fetchAndDisplayUsers();
