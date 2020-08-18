import React from 'react';
import { NavLink} from 'react-router-dom'

const Header = ()=>(
    <header>
    <h1>Portfolio</h1>
    <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">My Work</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact Me</NavLink>
    </header>
)

export default Header