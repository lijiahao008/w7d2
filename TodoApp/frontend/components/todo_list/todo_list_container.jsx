import { connect } from "react-redux";
import todoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import { removeTodo, fetchTodos, createTodo, receiveTodo, deleteTodo, updateTodo } from '../../actions/todo_actions';
import TodoForm from './todo_form';


const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
