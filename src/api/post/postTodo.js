export default (newTodo) => {
    // eslint-disable-next-line no-param-reassign
    newTodo.id = Math.random();
    // eslint-disable-next-line no-param-reassign
    newTodo.checked = false;
    return newTodo;
};
