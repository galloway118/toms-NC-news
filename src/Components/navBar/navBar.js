import React from 'react';
import Sidebutton from '../sideBar/sideBarButton';
import './navBar.css';
import { Link } from '@reach/router';

const Navbar = ({ navBarClickHandler, username, handleLogOut }) => {
  return (
    <header className="navbar">
      <nav className="navbar_links">
        <div className="navbar_toggle">
          <Sidebutton click={navBarClickHandler} />
        </div>
        {username !== null ? (
          <img
            className="tomglogo"
            src="https://media.licdn.com/dms/image/C5603AQHz6b92YS5oiQ/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=XXmAMwLi8vDmprq4JrHC9QDVZc99ImxJjCqcQH2BCJM"
            alt="user"
          ></img>
        ) : (
          <p> no user</p>
        )}
        <div className="spacer"></div>
        <div className="navbar_items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Articles">Articles</Link>
            </li>
            {username === null ? (
              <li>
                <Link to="/Login">Log In</Link>
              </li>
            ) : (
              <li>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
