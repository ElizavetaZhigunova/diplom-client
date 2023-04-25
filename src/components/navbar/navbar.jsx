import {React, useState} from 'react';
import "../navbar/navbar.css";
import Logo from '../img/logo1.svg';
import Search from '../search-panel/search-panel';
import { NavLink, useNavigate } from 'react-router-dom';
import ModalWindow from '../modal-window/modal-window';
import {useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../../actions/user';




const Navbar = () => {

    const navigate = useNavigate()

    const isAuth = useSelector(state => state.user.isAuth)
    const user = useSelector(state => state.user.currentUser)

    const dispatch = useDispatch()
    

    useEffect(() => {

        if (localStorage.getItem('token')) {
            console.log("IsAuth", isAuth)
            dispatch(auth())
        }

    }, [])
    
    const [modalActive, setModalActive] = useState(false);

    const closeModalWindow = () => {
        setModalActive(false)
    }

    return (
        <div className='navbar'>
            <div className="navbar__container">
            <NavLink className='loga' to="/"><img src={Logo} alt="" className='logo'/></NavLink>
                <Search/>
                <NavLink className='A' to="AddNew"><div className="btn-rent">Сдать в аренду</div></NavLink>

                {!isAuth && <div className="btn-login" onClick={() => setModalActive(true)} >Войти</div>}

                {isAuth && <div className="btn-login" onClick={() => navigate('/profile')}>{user.name} &nbsp; {user.lastname}</div>}

                <ModalWindow active={modalActive} setActive={setModalActive} closeModalWindow={closeModalWindow} />
            </div>
        </div>
    );
};

export default Navbar;