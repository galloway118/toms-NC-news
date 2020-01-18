import React from 'react';
import './sideBar.css';

import { Link } from '@reach/router';

const SideBar = ({ navBarClickHandler, username, handleLogOut }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li onClick={navBarClickHandler}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={navBarClickHandler}>
          <Link to="/Articles">Articles</Link>
        </li>
        {username === null ? (
          <li onClick={navBarClickHandler}>
            <Link to="/Login">Log In</Link>
          </li>
        ) : (
          <li onClick={navBarClickHandler}>
            <button onClick={handleLogOut}>
              <span role="img" aria-label="user icon">
                {' '}
                👩‍💻
              </span>
              {username}
            </button>{' '}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SideBar;
