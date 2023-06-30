import _ from 'lodash';
import './style.css';
import dailyTaskWindow from './dailyTask.js';
import projectTaskWindow from './projectTask.js';

const dailyTask = document.getElementById('daily-task');
dailyTask.addEventListener('click', function () {
    dailyTaskWindow();
});

const projectTask = document.getElementById('project-task');
projectTask.addEventListener('click', function () {
    projectTaskWindow();
});