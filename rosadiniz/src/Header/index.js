import React from "react";
import './style.css';
import Logo from '../images/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="logo ">
                <img src={Logo} />
            </div>

            <div className="menu col-md-7 ">
                <ul className="itens ">
                    <li className="item">
                        <a>home</a>
                    </li>
                    <li className="item">
                        <a>Agenda</a>
                    </li>
                    <li className="item">
                        <a>Bio</a>
                    </li>
                    <li className="item">
                        <a>Contato</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;