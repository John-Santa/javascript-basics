import './styles.css';

import { Todo, TodoList } from './js/classes/index.js';
import { createHtmlTodo } from './js/components';


export const todoList = new TodoList();
todoList.todos.forEach( createHtmlTodo );

