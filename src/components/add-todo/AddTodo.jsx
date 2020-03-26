import React, { useState } from 'react';
import Input from 'chayns-components/lib/react-chayns-input/component/Input';
import Button from 'chayns-components/lib/react-chayns-button/component/Button';
import './addTodo.scss';
import { useDispatch } from 'react-redux';
import { fetchNewTodo } from '../../slices/todoSlice';

const AddTodo = () => {
    // get dispatch
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState({ title: '' });

    const handleSubmit = () => {
        // dispatch fetch
        dispatch(fetchNewTodo(newTodo));
        setNewTodo({ title: '' });
    };

    return (
        <div className="add-todo">
            <Input
                value={newTodo.title}
                onChange={(title) => setNewTodo({ ...newTodo, title })}
                placeholder="add todo"
                onEnter={handleSubmit}
            />
            <Button
                className="add-todo__button"
                onClick={handleSubmit}
                disabled={newTodo.title.length === 0}
            >
                +
            </Button>
        </div>
    );
};

AddTodo.propTypes = {
};

export default AddTodo;
