import React from "react";
import '../styles/App.scss';

const Menu = () => {
    return (
        <nav>        
        <div className="navbar-left">            
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email" >                    
                </li>
            </ul>
        </div>

    </nav>
    );
}

export default Menu;