import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = (todo) => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      color: todo.completed ? "grey" : "black",
    };
  };
  render() {
    const { todo } = this.props;
    return (
      <div className="list-group-item list-group-item-action d-flex justify-content-between">
        <div
          className="flex-fill pointer-on-hover"
          onClick={this.props.toggleComplete.bind(this, todo.id)}
        >
          <small className="text-muted d-block">Title:</small>
          <p style={this.getStyle(todo)}>{todo.title}</p>
        </div>
        <button
          className="align-self-center btn btn-danger"
          onClick={this.props.delTodo.bind(this, todo.id)}
        >
          ✕
        </button>
      </div>
    );
  }
}
// Prop types for validation
TodoItem.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};
export default TodoItem;
