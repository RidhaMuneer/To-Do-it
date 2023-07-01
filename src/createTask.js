import Task from './task.js';

export default function addTaskWindow(){

    const addTaskPopup = document.createElement('form');
    addTaskPopup.id = 'addTaskPopup';

    let html = `
    <h3>Add Task</h3>
    <input type="text" name="title" id="title" placeholder="Title" required>
    <textarea  id="description" placeholder="Description" name="description"></textarea>
    <div>
        <label for="taskDate">Date:</label>
        </div>
    <input type="date" id="taskDate" name="taskDate">
    
    <div><label for="priority">Priority:</label></div>
    <select id="priority" name="priority">
      <option value="" selected disabled>Select priority</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <button type="submit" id="submit-button">Add Task</button>

    `;

    addTaskPopup.insertAdjacentHTML('afterbegin', html);
    addTaskPopup.addEventListener('submit', function(event){
        event.preventDefault();
        let title = addTaskPopup.elements['title'].value;
        let description = addTaskPopup.elements['description'].value;
        let taskDate = addTaskPopup.elements['taskDate'].value;
        let priority = addTaskPopup.elements['priority'].value;

        let newTask = new Task(title, description, taskDate, priority);
        newTask.render(title, description, taskDate, priority);
        document.body.removeChild(addTaskPopup);
    });

    document.body.appendChild(addTaskPopup);
}