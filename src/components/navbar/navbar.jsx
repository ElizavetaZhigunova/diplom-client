import React from 'react';
import "../navbar/navbar.css";
import Logo from '../img/logo1.svg';
import Search from '../search-panel/search-panel';
import { NavLink } from 'react-router-dom';


const Navbar = () => {


    return (
        <div className='navbar'>
            <div className="navbar__container">
            <NavLink className='loga' to="/"><img src={Logo} alt="" className='logo'/></NavLink>
                {/* <div className="header"><NavLink className='loga' to="/">Fashion<br />for rent</NavLink></div> */}
                <Search/>
                <NavLink className='A' to="/"><div className="btn-rent">Сдать в аренду</div></NavLink>
                <NavLink className='A' to="Login"><div className="btn-login" >Войти</div></NavLink>
            </div>
        </div>
    );
};

export default Navbar;