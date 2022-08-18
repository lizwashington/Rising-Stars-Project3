import React from "react";


function Nav(props) {
    const { 
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected } = props;




    return (
        <header className="flex-row px-1">
            <h2>
            <a data-testid="link" href="/">
             
            </a>
           </h2>
            <nav>
            <ul className="link flex-row">
                <li className=" mx-2">
                    <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                      About
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                
                <li>Dashboard</li>
                <li>Messaging</li>
                <li>My Account</li>
                <li>Logout</li>
            </ul>
            </nav>
        </header>
    );
}
        
export default Nav;