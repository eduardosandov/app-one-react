import React from "react";
import '../styles/vars.css';
import '../styles/Header.css';

const Menu = () => {
    return (
        <nav>        
        <div className="navbar-left">
            
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
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