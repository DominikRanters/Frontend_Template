import { addTodo } from './todoSlice';

export const fetchAddTodo = (title) => async (dispatch, getState) => {
    // Do stuff with state data
    const { todo } = getState();

    // FETCH ......
    const newTodo = {
        id : Math.random(),
        checked: false,
        title,
    };


    dispatch(addTodo(newTodo));

    return true;
}

