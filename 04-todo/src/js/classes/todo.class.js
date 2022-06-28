export class Todo {

    constructor( task) {
        this.task = task;
        this.id = new Date().getTime();
        this.done = false;
        this.createdAt = new Date();
    }
}