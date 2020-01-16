import React, { Component } from 'react';
import './sideBar.css';
import {Link} from '@reach/router';


class SideBar extends Component {
    render() {
    return (
    <nav className="sidebar">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Articles">Articles</Link></li>
        {(this.props.username === null)?
                    <li><Link to="/Login">Log In</Link></li>:
                    <li><button onClick={this.props.handleLogOut}><span role='img' aria-label="user icon"> 👩‍💻</span>{this.props.username}</button>  </li>}
        </ul>
    </nav>
    );
};

};

export default SideBar;