import React from 'react'
import avatar from '../img/avatar.jpg';
import {NavLink} from 'react-router-dom'

function NavBar () {
    return (
        <div className='NavBar'>
            <div className='profile'>
                <img src={avatar} alt="" ></img>
            </div>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-title">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-title">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-title">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-title">
                        <NavLink to="/blog" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-title">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <footer className="footer">
                <p>
                    @2021 Stephen Tan
                </p>
            </footer>
        </div>
    )
}

export default NavBar;