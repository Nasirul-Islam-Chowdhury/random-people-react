import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <div className='first-container'>
            <img className='header-img' src="https://www.kindpng.com/picc/m/11-115659_computer-icons-vector-avatar-friend-logo-black-and.png" alt="" />
            <h1 className='header-text'>Find Friends</h1>
            </div>
            <div className='header-link'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/Services">Services</a>
                <a href="../Cart/Cart.js">Sent Request</a>
            </div>
        </nav>
    );
};

export default Header;