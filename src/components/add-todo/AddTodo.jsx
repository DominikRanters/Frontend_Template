import React, { useState } from 'react';
import Input from 'chayns-components/lib/react-chayns-input/component/Input';
import Button from 'chayns-components/lib/react-chayns-button/component/Button';
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
            <Input
                value={newTodoTitle}
                onChange={(title) => setNewTodoTitle(title)}
                placeholder="add todo"
                onEnter={handleSubmit}
            />
            <Button
                className="add-todo__button"
                onClick={handleSubmit}
                disabled={newTodoTitle.length === 0}
            >
                +
            </Button>
        </div>
    );
};

AddTodo.propTypes = {
};

export default AddTodo;
