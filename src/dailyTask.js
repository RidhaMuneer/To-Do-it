import addTaskWindow from './createTask.js';

export default function dailyTaskWindow(){
    const navBar = document.getElementById('nav-bar');

    //creating the header for the daily task window.
    const header = document.createElement('h3');
    header.textContent = 'Daily Tasks';

    navBar.appendChild(header);

    //creating the add task button.
    const addTaskButton = document.createElement('button');
    addTaskButton.id = 'add-task-button';
    addTaskButton.textContent = '+';
    addTaskButton.addEventListener('click', function(){
        addTaskWindow();
    });

    navBar.appendChild(addTaskButton);
}