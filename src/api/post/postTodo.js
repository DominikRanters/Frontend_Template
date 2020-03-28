// export Fetch
export default async (newTodo) => {
    // FETCH ......

    newTodo.id = Math.random();

    newTodo.checked = false;
    return newTodo;
};
