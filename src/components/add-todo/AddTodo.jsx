import React, { useState } from 'react';
import './addTodo.scss';
import { useDispatch } from 'react-redux';
import { fetchAddTodo } from '../../slices/todo/todoFetches';

const AddTodo = () => {
    // get dispatch
    const dispatch = useDispatch();

    const [newTodoTitle, setNewTodoTitle] = useState('');

    const handleSubmit = () => {
        // dispatch fetch
        dispatch(fetchAddTodo(newTodoTitle));
        setNewTodoTitle('');
    };

    return (
        <div className="add-todo">
            <input
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="add todo"
                onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                        handleSubmit();
                    }
                }}
            />
            <button
                className="add-todo__button"
                onClick={handleSubmit}
                disabled={newTodoTitle.length === 0}
            >
                +
            </button>
        </div>
    );
};

AddTodo.propTypes = {
};

export default AddTodo;
