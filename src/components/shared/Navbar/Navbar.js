import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../../images/Logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navMainDiv">
            <Link className='imgContainer' to='/'> 
                <img src={logo} alt="Penguin-Fashion"/>
            </Link>
            <div>
                <Link to="/" className="item-link">Home</Link>
                <Link to="/" className="item-link">About</Link>
                <Link to="/" className="item-link">Contact</Link>
                <Link to="/" className="item-link">Admin Login</Link>

            </div>
        </div>
    );
};

export default Navbar;