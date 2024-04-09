import { useState } from "react";
///
export const AddToDo = ({ todoList, setTodoList }) => {
  const [toDo, setToDo] = useState("");

  const handleOnChange = ({ target }) => {
    setToDo(target.value);
  };

  const handleEnterPress = ({ keyCode }) => {
    if (keyCode === 13) {
      setTodoList([
        ...todoList,
        {
          id: new Date().getTime(),
          desc: toDo,
          done: false,
        },
      ]);
      setToDo("");
    }
  };
  // Lógica para añadir un todo
  return (
    <>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          name="todo"
          placeholder="ToDo"
          value={toDo}
          onChange={handleOnChange}
          onKeyUpCapture={handleEnterPress}
        />
        <label htmlFor="floatingInput">Ingrese su Tarea</label>
      </div>
    </>
  );
};