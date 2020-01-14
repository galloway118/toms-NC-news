import React from 'react';
import './header.css';

const Header = ({user}) => {
    return (
        <header className="header">
            <img className="tomglogo" src="https://st2.depositphotos.com/5943796/11382/v/950/depositphotos_113827038-stock-illustration-initial-letter-nc-blue-swoosh.jpg" alt="tom g at northcoders"></img>
                <div className="spacer"></div>
            <h1>Tom's NC NEWS</h1>
            <div className="spacer"></div>
            <img className="tomglogo" src="https://st2.depositphotos.com/5943796/11382/v/950/depositphotos_113827038-stock-illustration-initial-letter-nc-blue-swoosh.jpg" alt="tom g at northcoders"></img>
                
        </header>
    );
};

export default Header;