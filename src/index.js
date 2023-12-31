import _ from 'lodash';
import './style.css';
import dailyTaskWindow from './dailyTask.js';
import projectTaskWindow from './projectTask.js';
import {loadStorage, saveItem} from './localStorage';

let dailyClicked = false;
let projectClicked = false;
const dailyTask = document.getElementById('daily-task');
dailyTask.addEventListener('click', function () {
    if( dailyClicked == false) {
        dailyTaskWindow();
        dailyClicked = true;
        projectClicked = false;
        loadStorage();
    }
});

const projectTask = document.getElementById('project-task');
projectTask.addEventListener('click', function () {
    if( projectClicked == false){
        projectTaskWindow();
        projectClicked = true;
        dailyClicked = false;
    }
});