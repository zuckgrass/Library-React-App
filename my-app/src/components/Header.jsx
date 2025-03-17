import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>{
    return(
        <header>
            <div className="links">
                <h1>Library App</h1>
                <hr />
                <NavLink to="/" className={({isActive}) => (isActive ? "active-style" : 'none')}>
                    Books list
                </NavLink>
                <br />
                <NavLink to="/addbook" className={({isActive}) => (isActive ? "active-style" : 'none')}>
                    Add Book
                </NavLink>
            </div>
        </header>
    )
}

export default Header;