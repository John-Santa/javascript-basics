export class Todo {

    constructor( task) {
        this.task = task;
        this.id = new Date().getTime();
        this.done = false;
        this.createdAt = new Date();
    }

    static jsonToTodo( { id, task, done, createAt } ) {
        const tempTodo = new Todo(task);
        tempTodo.id = id;
        tempTodo.done = done;
        tempTodo.createdAt = createAt;
        return tempTodo;
    }
}