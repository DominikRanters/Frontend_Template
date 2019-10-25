import { connect } from 'react-redux';
import AddTodo from '../components/add-todo/AddTodo';
import { addTodo } from '../action/todoActions';

const mapStatsToProps = ({ }) => ({

});

const mapDispatchToProps = dispatch => ({
    onSubmit: newTodo => dispatch(addTodo(newTodo))
});

export default connect(mapStatsToProps, mapDispatchToProps)(AddTodo);
