import produce from 'immer';

const initialState = {
    todos: [],
};

export default (state = initialState, action) => (
    produce(state, (draft) => {
        let clickedTodo;
        switch (action.type) {
            case 'ADD_TODO':
                draft.todos.push(action.data);
                return draft;
            case 'TOGGLE_TODO':
                clickedTodo = draft.todos[draft.todos.findIndex(todo => todo.id === action.id)];
                clickedTodo.checked = !clickedTodo.checked;
                return draft;
            case 'DELETE_TODO':
                draft.todos.splice(
                    draft.todos.findIndex(todo => todo.id === action.id),
                    1
                );
                return draft;
            default: {
                return state;
            }
        }
    })
);
