import React from "react";
import TodoListRow from "./TodoListRow";

function TodoList({ todos, deleteTodo, setDataToEdit, completeTodo }){
    console.log(todos)
    return(
        <ul className="todo-list">
            { todos.length === 0 ? <li class="empty-task">No hay tareas aún</li> : todos.map(el=><TodoListRow el={el} key={el.id} deleteTodo={deleteTodo} setDataToEdit={setDataToEdit} completeTodo = {completeTodo}/>)}
        </ul>
    );
}

export default TodoList;