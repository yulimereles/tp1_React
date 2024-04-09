import PropTypes from 'prop-types';

export const ToDoList = ({ todoList, setTodoList }) => {
        const completeTodo = ({ target }) => {
            const todos = todoList.map((todo) => {
                if (todo.id == +target.id) {
                    todo.done = !todo.done;
                }
                return todo;
            });
    
            setTodoList(todos);
        };
        // Lógica para completar un todo
    
        return (
            <>
                {todoList.length == 0 ? (
                    <span>No se registro nunguna tarea.</span>
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
