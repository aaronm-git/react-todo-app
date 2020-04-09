import React, { Component } from "react";
import TodoItem from "./TodoItem.jsx";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    const { todos, toggleComplete, delTodo } = this.props;
    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        delTodo={delTodo}
      />
    ));
  }
}
// Prop types for validation
Todos.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
export default Todos;
