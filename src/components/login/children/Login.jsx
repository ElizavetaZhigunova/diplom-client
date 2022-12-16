import React from 'react';
import Input from '../../Inputs/Input';


const Login = () => {
    return (
        <div className='registration'>
            <div className="form-reg">
                <Input type="text" placeholder="Введите имя"/>
                <Input type="text" placeholder="Введите фамилию"/>
                <Input type="text" placeholder="Введите email"/>
                <Input type="password" placeholder="Введите пароль"/>
                <button type='button' className="registration__btn">Зарегистрироваться</button>
               <br /><span className='reg-title' >Создавая аккаунт, Вы соглашаетесь с нашей <span className='blue-span'> политикой конфиденциальности</span></span>
            </div>
        </div>
    );
};

export default Login;