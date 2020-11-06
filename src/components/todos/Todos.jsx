import React from 'react';
import Checkbox from '../extensions/Checkbox'
import './todo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, todoStore } from '../../slices/todo/todoSlice';

const Todos = () => {
    // get dispetch
    const dispatch = useDispatch();

    // get props from state
    const todos = useSelector(todoStore);

    const renderTodosHeadline = () => {
        let checkedTodosCount = 0;
        const todosCount = todos.length;
        checkedTodosCount = todos.filter((todo) => todo.checked).length;
        const headlineString = `
             ${checkedTodosCount > 0 ? checkedTodosCount : ''}
             ${checkedTodosCount > 0 && todosCount > 0 ? '/' : ''}
             ${todosCount > 0 ? todosCount : ''} ${todosCount === 1 && checkedTodosCount <= 0 ? 'Todo' : 'Todos'}
             ${checkedTodosCount > 0 ? 'abgeschlossen' : ''}`;

        return <h2>{headlineString}</h2>;
    };

    return (
        <div className="todos">
            {renderTodosHeadline()}
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className="todo"
                >
                    <Checkbox
                        todo={todo}
                    />
                    <div
                        className="todo__delete-icon"
                        onClick={() => dispatch(deleteTodo({ id: todo.id }))}
                    >X</div>
                    <div>{todo.title}</div>
                </div>
            ))}
        </div>
    );
};

export default Todos;
