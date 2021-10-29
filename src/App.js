import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createTodo = data => {
    data.id = Date.now();
    setTodos([ ...todos, data ]);
  };

  const updateTodo = data => {
    let newData = todos.map(el => el.id === data.id ? data : el)
    setTodos(newData);
  };
  const deleteTodo = id => {
    let newData = todos.filter(el => el.id !== id)
    setTodos(newData); 
  };
  const completeTodo = id => {
    let newData = todos.map(el => el.id === id ? {task:el.task,id:el.id,completed:true}: el);
    setTodos(newData);
  };

  return (
    <div className="todo-app">
      <h1 className="title">¿Que debes hacer hoy?</h1>
      <TodoForm 
      createTodo={createTodo} 
      setDataToEdit={setDataToEdit} 
      dataToEdit={dataToEdit} 
      updateTodo={updateTodo}
      />
      <TodoList 
      todos={todos} 
      deleteTodo={deleteTodo} 
      setDataToEdit={setDataToEdit}
      completeTodo={completeTodo}
      />
    </div>
  );
}

export default App;
