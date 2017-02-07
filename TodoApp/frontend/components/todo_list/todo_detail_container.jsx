import { connect } from "react-redux";
import todoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import { receiveTodo, removeTodo } from '../../actions/todo_actions';
import todoDetailView from './todo_detail_view';


const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
});

export default connect(null, mapDispatchToProps)(todoDetailView);
