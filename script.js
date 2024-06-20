document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category-input');

    const taskText = taskInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const category = categoryInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item', priority);

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    taskDetails.innerHTML = `<strong>${taskText}</strong><br><small>Due: ${dueDate} | Category: ${category}</small>`;
    
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');
    
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-button');
    completeButton.innerHTML = '✔';
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('complete');
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '✖';
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });

    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);
    taskItem.appendChild(taskDetails);
    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';
    categoryInput.value = '';
}
