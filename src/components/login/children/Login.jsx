import React, {useState} from 'react';
import Input from '../../Inputs/Input';
import './login.css';
import { registration } from '../../../actions/user';


const Login = ({closeModalWindow}) => {
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    
    return (
        <div className='registration'>
            <div className="form-reg">
                <Input value={name} setValue={setName} type="text" placeholder="Введите имя"/>
                <Input value={lastname} setValue={setLastname} type="text" placeholder="Введите фамилию"/>
                <Input value={phone} setValue={setPhone} type="text" placeholder="Введите номер телефона"/>
                <Input value={email} setValue={setEmail} type="text" placeholder="Введите email"/>
                <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
                <button type='button' className="registration__btn" onClick={() => registration(name, lastname, phone, email, password)} >Зарегистрироваться</button>
               <br /><span className='reg-title' >Создавая аккаунт, Вы соглашаетесь <br /> с нашей <span className='blue-span'> политикой конфиденциальности</span></span>
            </div>
        </div>
    );
};

export default Login;