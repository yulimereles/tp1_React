import { useState } from "react";
import { AddToDo } from "../components/AddTodo";
import { ToDoList } from "../components/TodoList";
export const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  // Lógica para almacenar los todos

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h1>Lista de Tareas. </h1>
        </div>
      </div>

      {/* TodoFilter */}
      <div className="row mb-3">
        <div className="col d-flex gap-1">
          <button className="btn btn-sm btn-success">Tarea Completada</button>

          <button className="btn btn-sm btn-warning">Tarea Pendiente</button>
        </div>
      </div>

      {/* TodoAdd */}
      <div className="row mb-4">
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
          <AddToDo setTodoList={setTodoList} todoList={todoList} />
        </div>

        {/* TodoList */}
        <div className="col-sm-12 col-md-8">
          <h3>Lista</h3>

          {/* TodoList Item */}
          <ToDoList todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
    </div>
  );
};