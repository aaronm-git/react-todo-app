import React, { Component } from "react";

export default class AddTodo extends Component {
  // component level state
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="New todo..."
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            required
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              New Todo
            </button>
          </div>
        </div>
      </form>
    );
  }
}
