import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todo_list_items';
import TodoListForm from './todo_form';

class todoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                deleteTodo={this.props.deleteTodo}
                receiveTodo={this.props.receiveTodo}
                updateTodo={this.props.updateTodo}
              />
            );
          })
        }
        <TodoListForm
          createTodo={this.props.createTodo}
          errors= {this.props.errors}
          />
      </ul>
    );
  }
}


export default todoList;
