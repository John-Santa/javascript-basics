export class TodoList {

    constructor() {
        this.loadFromLocalStorage();
    }

    addTodo(task) {
        this.todos.push(task);
        this.saveToLocalStorage();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== parseInt(id));
        this.saveToLocalStorage();
    }

    updateTodo(id) {
        this.todos.forEach(todo => {
            if (todo.id === parseInt(id)) {
                todo.done = !todo.done;
                this.saveToLocalStorage();
            }
        });
    }

    deleteDoneTodos() {
        this.todos = this.todos.filter(todo => !todo.done);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromLocalStorage() {
        (localStorage.getItem('todos'))
            ? this.todos = JSON.parse(localStorage.getItem('todos'))
            : this.todos = [];

    }
}