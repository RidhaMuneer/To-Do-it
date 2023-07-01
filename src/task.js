'use strict'
export default class Task{
    #title;
    #description;
    #dueDate;
    #priority;
    constructor(title, description, dueDate, priority){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }
    getTitle(){
        return this.title;
    }
    getDescription(){
        return this.description;
    }
    getDueDate(){
        return this.dueDate;
    }
    getPriority(){
        return this.priority;
    }
    setPriority(priority){
        this.priority = priority;
    }
    setDueDate(dueDate){
        this.dueDate = dueDate;
    }
    setTitle(title){
        this.title = title;
    }
    setDescription(description){
        this.description = description;
    }
    render(title, description, dueDate, priority){
        let html = 
        ` <div class="card">
            <div class="card-body">
                <button type="button" class="delete" onclick="delete()">X</button>
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">${dueDate}</p>
                <p class="card-text">${priority}</p>
            </div>
        </div>`;
        const container = document.getElementById('tasks-container');
        container.insertAdjacentHTML('beforeend', html);
    }
}