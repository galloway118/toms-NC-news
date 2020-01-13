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
        <li><Link to="/Login">Log In</Link></li>
        </ul>
    </nav>
    );
};

};

export default SideBar;