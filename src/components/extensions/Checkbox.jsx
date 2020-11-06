import React from 'react';
import PropTypes from 'prop-types';
import { toggleTodo } from '../../slices/todo/todoSlice';
import { useDispatch } from 'react-redux';

const propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        checked: PropTypes.bool,
    }).isRequired
};

const defaultProps = {
};

const Checkbox = ({ todo }) =>{
    const dispatch = useDispatch();

    return (
        <div className={'cc__checkbox'}>
            <input
                key="input"
                type="checkbox"
                className="checkbox"
                                // dispatch action
                onChange={() => dispatch(toggleTodo({ id: todo.id }))}
                id={todo.id}
                checked={todo.checked}
            />
        </div>
    );
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
export default Checkbox;
