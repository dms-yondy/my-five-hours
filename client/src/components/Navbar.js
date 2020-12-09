import React from 'react'
import {Link} from 'react-router-dom';

import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <h1 className="logo">MY FIVE HOURS</h1>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <nav>
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link className="link" to="/login">Login</Link>    
                    </li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className="nav-toggle-label"> 
                <span></span>
            </label>
        </header>
    )
}
