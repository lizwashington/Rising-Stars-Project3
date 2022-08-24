import React from "react";
import { NavLink } from "react-router-dom";
import {AuthProvider} from '../../utils/auth'





const Nav = () => {

    return (
        <header className="flex-row px-1">

            <nav>

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
              </>
            </nav>
        </header>
    );
}
        
export default Nav;