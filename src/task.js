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
}