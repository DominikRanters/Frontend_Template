import { combineReducers } from 'redux';
import TodoReducer from './todo/todoSlice';

export default combineReducers({
    // combine reducer
    todos: TodoReducer
});
