import { createSlice } from '@reduxjs/toolkit';
import { fetchAddTodo } from './todoFetches';

// create Slice
const slice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        isLoading: false,
    },
    reducers: {

    },
    extraReducers: {
        // action name
        [fetchAddTodo.pending]: (draft, { payload, meta }) => {
            // get fetchAddTodo input parameters
            const parameters = meta.arg;

            draft.isLoading = true;
        },
        [fetchAddTodo.fulfilled]: (draft, { payload, meta }) => {
            // get fetchAddTodo input parameters
            const parameters = meta.arg;

            // change/edit state
            draft.todos.push(payload);
        },
        // action name
        toggleTodo: (draft, { payload }) => {
            // change/edit state
            const clickedTodo = draft.todos[state.todos.findIndex((todo) => todo.id === payload.id)];
            clickedTodo.checked = !clickedTodo.checked;
        },
        // action name
        deleteTod: (draft, { payload }) => {
            // change/edit state
            draft.todos.splice(
                draft.todos.findIndex((todo) => todo.id === payload.id),
                1
            );
        }
    }
});

// export reducer
export default slice.reducer;

// export actions
export const {
    addTodo,
    toggleTodo,
    deleteTod
} = slice.actions;
