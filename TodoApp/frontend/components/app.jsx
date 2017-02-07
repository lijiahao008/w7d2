import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todo_list/todo_list_container';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <TodoListContainer />
      </div>
    );
  }

}
