import {React, useState} from 'react';
import "../navbar/navbar.css";
import Logo from '../img/logo1.svg';
import Search from '../search-panel/search-panel';
import { NavLink } from 'react-router-dom';
import ModalWindow from '../modal-window/modal-window';
import {useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { useEffect } from 'react';
import { connect } from "react-redux"

const Navbar = () => {

    

    const isAuth = useSelector(state => state.user.isAuth)

    const dispatch = useDispatch()

    useEffect(() => {

        if (localStorage.getItem('token')) {
            console.log("IsAuth", isAuth)
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

                {isAuth && <div className="btn-login" onClick={() => dispatch(logout())}>User</div>}

                <ModalWindow active={modalActive} setActive={setModalActive} closeModalWindow={closeModalWindow} />
            </div>
        </div>
    );
};

const mapStateToProps = ({currentUser}) => {
    return {currentUser}
}

export default connect(mapStateToProps)(Navbar);