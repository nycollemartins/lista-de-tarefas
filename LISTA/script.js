document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-task">✖</button>
        `;

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        const deleteButton = taskItem.querySelector('.delete-task');
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            taskList.removeChild(taskItem);
        });

        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskInput.focus();
    }

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
