import React from 'react'
import './navbar.css'
import {Link,NavLink} from 'react-router-dom'
function Navbar(){


    return(
        <>
        <nav className="containter blue darken-1">
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">MY NOTES</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/favorites">Favorites</NavLink></li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar