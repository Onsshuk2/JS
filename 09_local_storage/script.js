const todoInput = document.getElementById('todo-input');
        const addTodoButton = document.getElementById('add-todo');
        const todoList = document.getElementById('todo-list');
        const clearListButton = document.getElementById('clear-list');

        function loadTodos() {
            const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
            savedTodos.forEach(todo => {
                createTodoElement(todo.text, todo.completed);
            });
        }

        function saveTodos() {
            const todos = Array.from(todoList.children).map(todo => ({
                text: todo.querySelector('.todo-text').textContent,
                completed: todo.classList.contains('completed')
            }));
            localStorage.setItem('todos', JSON.stringify(todos));
        }

        function createTodoElement(text, completed = false) {
            const li = document.createElement('li');
            li.className = 'todo-item';
            if (completed) li.classList.add('completed');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = completed;
            checkbox.addEventListener('change', () => {
                li.classList.toggle('completed');
                saveTodos();
            });
            const span = document.createElement('span');
            span.textContent = text;
            span.className = 'todo-text';

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                li.remove();
                saveTodos();
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);

            todoList.appendChild(li);
        }

        addTodoButton.addEventListener('click', () => {
            const text = todoInput.value.trim();
            if (text) {
                createTodoElement(text);
                saveTodos();
                todoInput.value = '';
            }
        });

        clearListButton.addEventListener('click', () => {
            todoList.innerHTML = '';
            saveTodos();
        });

        loadTodos();
