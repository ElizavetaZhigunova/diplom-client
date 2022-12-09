import React from 'react';
import "../navbar/navbar.css";
import Logo from '../img/logo.jpg';
import Search from '../search-panel/search-panel';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__container">
                <img src={Logo} alt="" className='logo'/>
                <div className="header"><NavLink className='loga' to="/">Fashion<br />for rent</NavLink></div>
                <Search/>
                <NavLink className='A' to="/"><div className="btn-rent">Сдать в аренду</div></NavLink>
                <NavLink className='A' to="login"><div className="btn-login">Войти</div></NavLink>
            </div>
        </div>
    );
};

export default Navbar;