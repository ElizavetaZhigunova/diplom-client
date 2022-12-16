import React from 'react';
import "../login/login.css";
import Login from './children/Login';
import Footer from '../footer/footer';
import Reg from './children/Reg';
import "../login/children/function.js";

const Loginn = () => {
    return (
        <div className="registration">
            <div className="tabs-block-wrapper">
            <div id="tabs">
                <div className="tab-btn active" data-btn="1">Регистрация</div>
                <div className="tab-btn" data-btn="2">Авторизация</div>
            </div>
            <div id="contents">
                <div className="content active" data-content="1">
                    <Login/>
                </div>
                <div className="content" data-content="2">
                    <Reg/>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
        
    );
};

export default Loginn;

