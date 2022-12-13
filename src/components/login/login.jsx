import React from 'react';
import "../login/login.css";
import Input from '../Inputs/Input';
import Footer from '../footer/footer';
import { NavLink } from 'react-router-dom';


const Loginn = () => {
    return (
        <div className='registration'>
            <div className="form-reg">
                <div className="registration__header">
                    <NavLink className="Al"  to="/"><div className='link active'>Регистрация</div></NavLink>
                    <NavLink className="Al"  to="/"><div className='link'>Авторизация</div></NavLink>
                </div>
                <Input type="text" placeholder="Введите имя"/>
                <Input type="text" placeholder="Введите фамилию"/>
                <Input type="text" placeholder="Введите email"/>
                <Input type="password" placeholder="Введите пароль"/>
                <button type='button' className="registration__btn">Зарегистрироваться</button>
               <span className='reg-title' >Создавая аккаунт, Вы соглашаетесь с нашей <span className='blue-span'> политикой конфиденциальности</span></span>
            </div>
            <Footer/>
        </div>
    );
};

export default Loginn;