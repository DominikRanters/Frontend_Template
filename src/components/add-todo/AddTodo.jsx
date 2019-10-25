import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'chayns-components/lib/react-chayns-input/component/Input';
import Button from 'chayns-components/lib/react-chayns-button/component/Button';
import './addTodo.scss';

const useDestructuringState = (defaultState) => {
    const [state, setState] = useState(defaultState);
    const updateState = (object) => {
        setState(prevState => ({ ...prevState, ...object }));
    };
    const resetState = () => {
        setState(defaultState);
    };
    return [
        state,
        updateState,
        resetState
    ];
};

const AddTodo = ({ onSubmit }) => {
    const [newTodo, updateTodo, resetState] = useDestructuringState({
        title: ''
    });

    const handleSubmit = () => {
        onSubmit(newTodo);
        resetState();
    };

    return (
        <div className="add-todo">
            <Input
                value={newTodo.title}
                onChange={title => updateTodo({ title })}
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
    onSubmit: PropTypes.func.isRequired
};

export default AddTodo;
