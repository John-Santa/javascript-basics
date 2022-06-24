import './styles.css';

import { Todo, TodoList } from './js/classes/index.js';


const todoList = new TodoList();
const task = new Todo('Learn JavaScript');
const task2 = new Todo('Learn React');

todoList.addTodo(task);
todoList.addTodo(task2);
console.log(todoList);