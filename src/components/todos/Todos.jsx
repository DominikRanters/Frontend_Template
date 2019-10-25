import React from 'react';
import Checkbox from 'chayns-components/lib/react-chayns-checkbox/component/Checkbox';
import Icon from 'chayns-components/lib/react-chayns-icon/component/Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AddTodo from '../../container/AddTodoContainer';
import './todo.scss';

const Todos = ({ todos, onDelete, onToggleTodo }) => {

    const renderTodosHeadline = () => {
        let checkedTodosCount = 0;
        const todosCount = todos.length;
        checkedTodosCount = todos.filter(todo => todo.checked).length;
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
            {todos.map(todo => (
                <div
                    key={todo.id}
                    className="todo"
                >
                    <Checkbox
                        checked={todo.checked}
                        onChange={() => onToggleTodo(todo.id)}
                    />
                    <Icon
                        className="todo__delete-icon"
                        icon={faTrash}
                        onClick={() => onDelete(todo.id)}
                    />
                    <div>{todo.title}</div>
                </div>
            ))}
            <AddTodo/>
        </div>
    );
};

export default Todos;
