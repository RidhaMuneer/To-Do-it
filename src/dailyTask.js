import addTaskWindow from './createTask.js';

export default function dailyTaskWindow(){
    const dailyTaskContainer = document.getElementById('tasks-section');

    const navBar = document.createElement('div');
    navBar.id = 'nav-bar';

    //creating the header for the daily task window.
    const header = document.createElement('h3');
    header.textContent = 'Daily Tasks';

    navBar.appendChild(header);

    //creating the add task button.
    const addTaskButton = document.createElement('button');
    addTaskButton.id = 'add-task-button';
    addTaskButton.textContent = '+';
    addTaskButton.addEventListener('click', function(e){
        addTaskWindow();
    });

    navBar.appendChild(addTaskButton);

    dailyTaskContainer.appendChild(navBar);
}