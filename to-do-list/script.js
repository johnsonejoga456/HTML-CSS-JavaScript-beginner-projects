document.getElementById('todoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const taskText = document.getElementById('todoInput').value.trim();

    if (taskText) {
        addTask(taskText);
    }
});

function addTask(taskText) {
    const todoList = document.getElementById('todoList');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
        todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    })
}