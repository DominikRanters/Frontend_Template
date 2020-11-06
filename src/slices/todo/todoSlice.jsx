import { createSlice } from '@reduxjs/toolkit';

// init State
const initialState = [
    {
        id: 0.51615147,
        checked: false,
        title: 'Complete math exercises',
    },{
        id: 0.65746574,
        checked: false,
        title: 'Clean up the room',
    },
]

// create Slice
const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
     // action name
        addTodo: (state, { payload }) => {
            // push new todo
            state.push(payload);
         },
     // action name
        toggleTodo: (state, { payload }) => {
            // get index of this todo
            const todoIndex = state.findIndex((todo) => todo.id === payload.id);
            // change checked value
            state[todoIndex].checked = !state[todoIndex].checked;
        },
     // action name
        deleteTodo: (state, { payload }) => {
            // get index of this todo
            const todoIndex = state.findIndex((todo) => todo.id === payload.id);
            // change/edit state
            state.splice(todoIndex, 1);
        }
    }
});

// export reducer
export default slice.reducer;

// export state
export const todoStore = (state) => state.TodoReducer;

// export actions
export const {
    addTodo,
    toggleTodo,
    deleteTodo
} = slice.actions;
