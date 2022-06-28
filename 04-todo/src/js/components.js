import { todoList } from "../index";
import { Todo } from "./classes/index";

//* Html references
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnClearComplete = document.querySelector('.clear-completed');

export const createHtmlTodo = (todo) => {
    const htmlTodo = `
    <li class="${(todo.done) ? 'completed' : ''}" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.done) ? 'checked' : ''}>
            <label>${ todo.task }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

//* Event Listeners
txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        const task = txtInput.value;
        if (task) {
            const todo = new Todo(task);
            todoList.addTodo(todo);

            createHtmlTodo(todo);
            txtInput.value = '';
        }
    }
});

divTodoList.addEventListener('click', (event) => {
    const target = event.target;
    const todoElement = target.parentElement.parentElement;
    const id = todoElement.getAttribute('data-id');
    if (target.classList.contains('destroy')) {
        todoList.deleteTodo(id);
        target.parentElement.parentElement.remove();
    } else if (target.classList.contains('toggle')) {
        todoList.updateTodo(id);
        todoElement.classList.toggle('completed');
    }
});

btnClearComplete.addEventListener('click', () => {
    todoList.deleteDoneTodos();
    divTodoList.querySelectorAll('.completed').forEach(todo => todo.remove());
});