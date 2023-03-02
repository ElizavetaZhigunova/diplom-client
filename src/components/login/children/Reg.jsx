import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/user';
import Input from '../../Inputs/Input';
import './login.css';

const Reg = ({closeModalWindow}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const dispatch = useDispatch()

    return (
        <div className='registration'>
            <div className="form-reg">
                <Input value={email} setValue={setEmail} type="text" placeholder="Введите email"/>
                <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
                <button type='button' className="registration__btn" onClick = {() => dispatch(login(email, password, closeModalWindow))}>Войти</button>
            </div>
        </div>
    );
};

export default Reg;