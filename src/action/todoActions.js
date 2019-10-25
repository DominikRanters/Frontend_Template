import postNewTodo from '../api/post/postTodo';

export const addTodo = newTodo => async (dispatch) => {
    const nextTodo = await postNewTodo(newTodo);
    if (nextTodo) {
        dispatch(addTodoSuccess(nextTodo));
    } else {
        //error
    }
};

const addTodoSuccess = data => ({
    type: 'ADD_TODO',
    data
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
});
