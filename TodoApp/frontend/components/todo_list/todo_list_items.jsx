import React from 'react';
import ReactDOM from 'react-dom';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.todo = this.props.todo;
    this.state = {
      id: this.todo.id,
      title: this.todo.title,
      body: this.todo.body,
      done: this.todo.done,
      detail: false
    };
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.buttonDisplay = this.buttonDisplay.bind(this);
    this.changeDetail = this.changeDetail.bind(this);

  }

  removeItem(event) {
    event.preventDefault();
    this.props.deleteTodo(this.todo);
    // this.setState({id: ""});
  }

  updateItem(e){
    e.preventDefault();
    this.props.updateTodo(this.todo);
    // this.setState({done: !this.state.done});
  }

  buttonDisplay(){
    return this.state.done ? "Undone" : "Done";
  }

  changeDetail(){
    this.setState({detail: !this.state.detail});
  }


  render() {
    return (
      <li key={this.todo.id}>
        <h1 onClick={this.changeDetail}>{this.todo.title}</h1>
        <button type="submit" onClick={this.removeItem}>Remove</button>
        <button type="submit" onClick={this.updateItem}>{ this.buttonDisplay() }</button>
        {this.state.detail ? <TodoDetailView body={this.state.body}/> : ""}
        </li>
    );
  }
}

export default TodoListItem;
