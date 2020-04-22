import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm mb-3">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav w-100 justify-content-center">
          <li className="nav-item mx-md-4">
            <Link className="nav-link" to="/react-todo-app/">
              Home
            </Link>
          </li>
          <li className="nav-item mx-sm-4">
            <Link className="nav-link" to="/react-todo-app/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <React.Fragment>
      <div className="bg-dark text-light text-center p-3">
        <h1>Todo App</h1>
      </div>
      <Nav />
    </React.Fragment>
  );
}

Header.propTypes = {};

export default Header;
