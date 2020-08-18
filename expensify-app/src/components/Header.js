import React from 'react';
import { NavLink} from 'react-router-dom'

const Header = ()=>(
    <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="is-active">Home</NavLink><br/>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br/>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

export default Header