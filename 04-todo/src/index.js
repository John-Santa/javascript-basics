import './styles.css';

import { Todo, TodoList } from './js/classes/index.js';
import { createHtmlTodo } from './js/components';



const task = new Todo('Learn JavaScript');
export const todoList = new TodoList();

todoList.addTodo(task);
console.log(todoList);

createHtmlTodo(task);