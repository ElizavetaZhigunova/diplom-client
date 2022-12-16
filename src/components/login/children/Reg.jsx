import React from 'react';
import Input from '../../Inputs/Input';

const Reg = () => {
    return (
        <div className='registration'>
            <div className="form-reg">
                <Input type="text" placeholder="Введите email"/>
                <Input type="password" placeholder="Введите пароль"/>
                <button type='button' className="registration__btn">Войти</button>
            </div>
        </div>
    );
};

export default Reg;