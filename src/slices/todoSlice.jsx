import { createSlice } from '@reduxjs/toolkit';
import postNewTodo from '../api/post/postTodo';

// dispatch zum fetchen
export const fetchNewTodo = (newTodo) => async (dispatch) => {
    const response = await postNewTodo(newTodo); // fetch

    dispatch(addTodo(response)); // dispatch action
};


const slice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        // action name
        addTodo: (state, { payload }) => {
            // change/edit state
            state.todos.push(payload);
         },
        // action name
        toggleTodo: (state, { payload }) => {
            // change/edit state
            const clickedTodo = state.todos[state.todos.findIndex((todo) => todo.id === payload.id)];
            clickedTodo.checked = !clickedTodo.checked;
        },
        // action name
        deleteTod: (state, { payload }) => {
            // change/edit state
            state.todos.splice(
                state.todos.findIndex((todo) => todo.id === payload.id),
                1
            );
        }
    }
});

// export state
export const getTodos = (state) => state.TodoReducer;

// export reducer
export default slice.reducer;

// export actions
export const {
    addTodo,
    toggleTodo,
    deleteTod
} = slice.actions;
