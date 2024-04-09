import  { useEffect } from 'react';
import PropTypes from 'prop-types';

export const ToDoList = ({ todoList, setTodoList }) => {
    const completeTodo = ({ target }) => {
        const todos = todoList.map((todo) => {
            if (todo.id === +target.id) {
                todo.done = !todo.done;
            }
            return todo;
        });

        setTodoList(todos);
    };


    useEffect(() => {
        console.log('El estado de todoList ha cambiado:', todoList);
    }, [todoList]);

    return (
        <>
            {todoList.length === 0 ? (
                <span>No se registró ninguna tarea.</span>
            ) : (
                todoList.map((todo) => (
                    <div
                        key={todo.id}
                        className={`d-flex align-items-center alert ${
                            todo.done ? "alert-success" : "alert-warning"
                        } show`}
                    >
                        {todo.desc}
                        <button
                            onClick={completeTodo}
                            id={todo.id}
                            type="button"
                            className="btn text-success"
                        >
                            {todo.done ? "Completada" : "Completar"}
                        </button>
                    </div>
                ))
            )}
        </>
    );
};

ToDoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    setTodoList: PropTypes.func.isRequired,
};
