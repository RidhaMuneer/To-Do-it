import {saveItem, loadStorage} from './localStorage';

'use strict'
export default class Task{
    title;
    description;
    dueDate;
    priority;
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    //move that to a class related to rendering elements on the page, and make a delete button
    //function.
    render(){
        let title = this.title;
        let description = this.description;
        let priority = this.priority;
        let dueDate = this.dueDate;
        let html = 
        ` <div id="card">
            <div class="card-body">
                <button type="button" id="delete">X</button>
                <p class="card-title">${title}</p>
                <p class="card-text">${description}</p>
                <p class="card-text">${dueDate}</p>
                <p class="card-text">${priority}</p>
            </div>
        </div>`;
        const container = document.getElementById('tasks-container');
        container.insertAdjacentHTML('beforeend', html);
        // saveItem(index, this);
    }
}