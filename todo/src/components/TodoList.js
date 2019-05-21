import React from "react";
import { connect } from "react-redux";
import { addNewTodo, toggleTodo, deleteTodo } from "../store/actions/index";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChange = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addNewTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  };

  toggleTodo = (e, id) => {
    e.preventDefault();
    this.props.toggleTodo(id);
  };

  deleteTodo = (e, id) => {
    e.preventDefault();
    this.props.deleteTodo(id);
  };

  render() {
    console.log(this.props);
    return (
      <>
        <div className="todo-list">
          {this.props.todos.map(todo => (
            <h4 onClick={e => this.toggleTodo(e, todo.id)} key={todo.id}>
              {todo.value}
              {todo.completed && <i class="far fa-check-square" />}
              <i class="far fa-trash-alt" onClick={this.deleteTodo}></i>
            </h4>
          ))}
        </div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.newTodo}
          placeholder="Add new Todo"
        />
        <button onClick={this.addNewTodo}>Add new Todo</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapActionToProps = {
  addNewTodo,
  toggleTodo
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(TodoList);
