import { RECEIVE_TODOS, RECEIVE_TODO, CLEAR, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const _defaultState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_TODOS:
      let newTodos = {};
      action.todos.forEach((obj,idx) => {
        newTodos[obj.id] = obj;
      });
      return newTodos;
    case RECEIVE_TODO:
      let newTodo = {[action.todo.id]: action.todo};
      let newState = merge({}, oldState, newTodo);
      return newState;
    case REMOVE_TODO:
      let dupedState = merge({}, oldState);
      let id = action.todo.id;
      delete dupedState[id];
      return dupedState;
    default:
      return oldState;
  }
};

export default todosReducer;

window._defaultState = _defaultState;
