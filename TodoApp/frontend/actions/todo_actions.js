import * as APIUtil from '../util/todo_app_util';
import {receiveErrors} from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CLEAR = "CLEAR";


export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});


export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const clearList = () => ({
  type: CLEAR
});

export const fetchTodos = () => {
  return (dispatch) => {
    return APIUtil.getTodos().then(todos => {
      return dispatch(receiveTodos(todos));
    });
  };
};

export const createTodo = (todo) => {
  return (dispatch) => {
    return APIUtil.createTodo(todo).
      then(todo => dispatch(receiveTodo(todo)),
        err => {
          // debugger
          dispatch(receiveErrors(err.responseJSON));
        }
    );
  };
};

export const deleteTodo = (todo) => {
  return (dispatch) => {
    return APIUtil.deleteTodo(todo).then(todo => {
      return dispatch(removeTodo(todo));
    });
  };
};

export const updateTodo = (todo) => {
  return (dispatch) => {
    return APIUtil.updateTodo(todo).then(todo => {
      return dispatch(receiveTodo(todo));
    });
  };
};


window.fetchTodos = fetchTodos;

// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos;
// window.clearList = clearList;
