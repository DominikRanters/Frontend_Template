import { connect } from 'react-redux';
import Todos from '../components/todos/Todos';
import { deleteTodo, toggleTodo } from '../action/todoActions';

const mapStatsToProps = ({ todoReducer }) => ({
    todos: todoReducer.todos
});

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteTodo(id)),
    onToggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStatsToProps, mapDispatchToProps)(Todos);
