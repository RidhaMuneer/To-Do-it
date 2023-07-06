import Task from './task.js';

let tasks = [];

export function loadStorage() {
  var retrievedArrayString = localStorage.getItem('tasks');
  var retrievedArray = JSON.parse(retrievedArrayString);

  if (retrievedArray) {
    tasks = retrievedArray;
    tasks.forEach(task => {
      let newTask = new Task(
        task.title,
        task.description,
        task.dueDate,
        task.priority
      );
      newTask.render();
    });
  }
}

export function saveItem(newTask) {
  tasks.push(newTask);
  var arrayString = JSON.stringify(tasks);
  localStorage.setItem('tasks', arrayString);
}