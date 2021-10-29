import React from "react";

function TodoListRow({ el, deleteTodo, setDataToEdit, completeTodo }){
    let { task , id, completed } = el;
    return( 
        <li className={ !completed ? "todo-item" : "todo-item completed" }>
            <span className="text">
                { task }
            </span>
            <nav className="actions">
                <button onClick={()=>completeTodo(id)} className={ !completed ? "todo-actions" : "todo-actions disabled"}>Completar</button>
                <button onClick={()=>setDataToEdit(el)} className={ !completed ? "todo-actions" : "todo-actions disabled"}>Editar</button>
                <button onClick={()=>deleteTodo(id)} className={ !completed ? "todo-actions" : "todo-actions disabled"}>Eliminar</button>
            </nav>  
        </li>
        
    );
}

export default TodoListRow;