import React from "react";
import { NavLink } from "react-router-dom";
import Auth from '../../utils/auth'

const Nav = () => {
    const logout = event => {
      event.preventDefault();
      Auth.logout();
    };
  

    return (
        <header className="flex-row px-1">

            <nav>
            {Auth.loggedIn() ? (
            <>
                <NavLink to='/Dashboard'>
                    Dashboard
                </NavLink>
                <NavLink to='/Messaging'>
                    Messaging
                </NavLink>
                <NavLink to='/MyAccount'>
                    My Account
                </NavLink>
                <NavLink to='/'>
                    Homepage
                </NavLink>
              <NavLink to="/profile">Me</NavLink>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
            ) : (
            <>
              <NavLink to="/Login">Login</NavLink>
              <NavLink to="/Signup">Signup</NavLink>
            </>
          )}
{/* 
                <>
                <NavLink to='/Dashboard'>
                    Dashboard
                </NavLink>
                <NavLink to='/Messaging'>
                    Messaging
                </NavLink>
                <NavLink to='/MyAccount'>
                    My Account
                </NavLink>
                <NavLink to='/'>
                    Homepage
                </NavLink>
                </>
                <>
                <NavLink to="/Login">Login</NavLink>
                <NavLink to="/Signup">Signup</NavLink>
              </> */}
            </nav>
        </header>
    );
}
        
export default Nav;