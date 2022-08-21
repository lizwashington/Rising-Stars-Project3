import React from "react";
import { NavLink } from "react-router-dom";





const Nav = () => {

    return (
        <header className="flex-row px-1">

            <nav>

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
          
            </nav>
        </header>
    );
}
        
export default Nav;