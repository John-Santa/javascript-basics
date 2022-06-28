export class TodoList {

    constructor() {
        this.todos = [];
    }

    addTodo(task) {
        this.todos.push(task);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== parseInt(id));
        console.log(this.todos);
    }

    updateTodo(id) {
        this.todos.forEach(todo => {
            if (todo.id === parseInt(id)) {
                todo.done = !todo.done;
            }
        });
    }

    deleteDoneTodos() {
        //this.todos = this.todos.filter(todo => !todo.done);
    }
}