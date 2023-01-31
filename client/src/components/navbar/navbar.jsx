import {React, useState} from 'react';
import "../navbar/navbar.css";
import Logo from '../img/logo1.svg';
import Search from '../search-panel/search-panel';
import { NavLink } from 'react-router-dom';
import ModalWindow from '../modal-window/modal-window';
import {useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { useEffect } from 'react';
import { auth } from '../../actions/user';

const Navbar = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(auth())
          }
    }, [])
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className='navbar'>
            <div className="navbar__container">
            <NavLink className='loga' to="/"><img src={Logo} alt="" className='logo'/></NavLink>
                {/* <div className="header"><NavLink className='loga' to="/">Fashion<br />for rent</NavLink></div> */}
                <Search/>
                <NavLink className='A' to="AddNew"><div className="btn-rent">Сдать в аренду</div></NavLink>
                {!isAuth &&
                    <div className="btn-login" onClick={() => setModalActive(true)} >Войти</div>
                }
                {isAuth && <div className="btn-login" onClick={() => dispatch(logout())}>Выход</div>}
                <ModalWindow active={modalActive} setActive={setModalActive}  />
            </div>
        </div>
    );
};

export default Navbar;