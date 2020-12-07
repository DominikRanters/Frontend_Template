import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAddTodo = createAsyncThunk(
    'todo/fetchAddTodo',async (arg, { rejectWithValue, getState, signal }) => {
        // Do stuff with state data
        const { todos } = getState();

        // fetch abbrechen
        fetch('example.com', { signal }).then(
            // do stuff
        )

        // FETCH ......
        const newTodo = {
            id : Math.random(),
            checked: false,
            title: arg.title,
        };

        if (newTodo !== null) {
            return newTodo;
        }

        return rejectWithValue();
    },
    {
        condition(arg, { getState }) {
            return !getState().todos.isLoading
        }
    }
);

// const promis = dispatch(fetchAddTodo(title))
// promis.abort()
