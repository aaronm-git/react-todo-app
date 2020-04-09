import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import About from "./components/pages/About";
import AddTodo from "./components/AddTodo";
import { v1 as uuidv1 } from "uuid";
import axios from "axios";

class App extends Component {
  state = { todos: [] };
  // toggle todo complete
  toggleComplete = (id) => {
    console.log("toggle complete task w/ id: " + id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };
  // delete todo
  delTodo = (id) => {
    console.log("deleting task w/ id: " + id);
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  // new todo
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        const todo = res.data;
        todo.id = uuidv1();
        console.log(todo);
        this.setState({ todos: [...this.state.todos, todo] });
      });
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((res) => {
        this.setState({ todos: res.data });
      });
  }

  render() {
    let HTML;
    if (this.state.todos.length) {
      HTML = () => (
        <React.Fragment>
          <div className="mt-4">
            <AddTodo addTodo={this.addTodo} />
          </div>
          <div className="list-group shadow">
            <Todos
              todos={this.state.todos}
              toggleComplete={this.toggleComplete}
              delTodo={this.delTodo}
            />
          </div>
        </React.Fragment>
      );
    } else
      HTML = () => (
        <React.Fragment>
          <div className="mt-4">
            <AddTodo addTodo={this.addTodo} />
          </div>
          <div className="text-center">
            <p className="text-muted">No Dotos Yet!</p>
          </div>
        </React.Fragment>
      );
    return (
      <Router>
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <div className="col">
          <Route exact path="/" render={(props) => HTML()} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
