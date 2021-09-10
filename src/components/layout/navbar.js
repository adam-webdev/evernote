import React from 'react'
import './navbar.css'
import {Link,NavLink} from 'react-router-dom'
function Navbar(){


    return(
        <>
        <nav className="containter blue darken-1">
            <div className="nav">
                <div><Link to="/">MY NOTES</Link></div>
                <div className="fav"><NavLink to="/favorites">Favorites</NavLink></div>
            </div>
        </nav>
        </>
    )
}

export default Navbar