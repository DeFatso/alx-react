import React from 'react';
import './Header.css';
import holbertonLogo from '../holberton_logo.jpg';

function Header() {
    return (
        <header className="App-header">
            <img src={holbertonLogo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
        </header>
    );
}

export default Header;