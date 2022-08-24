import React from "react";
import { NavLink } from "react-router-dom";
import Auth from '../../utils/auth'





const Nav = () => {

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
                </>
             ) : (
                <>
                <Link to="/Login">Login</Link>
                <Link to="/Signup">Signup</Link>
              </>
             )}
            </nav>
        </header>
    );
}
        
export default Nav;