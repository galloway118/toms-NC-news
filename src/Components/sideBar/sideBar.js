import React, { Component } from 'react';
import './sideBar.css';
import { Link } from '@reach/router';

class SideBar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul>
          <li onClick={this.props.navBarClickHandler}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={this.props.navBarClickHandler}>
            <Link to="/Articles">Articles</Link>
          </li>
          {this.props.username === null ? (
            <li onClick={this.props.navBarClickHandler}>
              <Link to="/Login">Log In</Link>
            </li>
          ) : (
            <li onClick={this.props.navBarClickHandler}>
              <button onClick={this.props.handleLogOut}>
                <span role="img" aria-label="user icon">
                  {' '}
                  👩‍💻
                </span>
                {this.props.username}
              </button>{' '}
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default SideBar;
