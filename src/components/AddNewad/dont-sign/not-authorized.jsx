import React, {useState} from 'react';
import ModalWindow from '../../modal-window/modal-window';
import './not-authorized.css';


const NotAuthorized = () => {
    const [modalActive, setModalActive] = useState(false);
    const closeModalWindow = () => {
        setModalActive(false)
    }
    return (
        <div className='wrapper-nauth'>
            <div className="container-nauth">
                <h1 className='header-nauth'>Для того чтобы опубликовать обявление, выполните вход или зарегистрируйтесь!</h1>
                <div className="btn-login" onClick={() => setModalActive(true)} >Войти</div>
                <ModalWindow active={modalActive} setActive={setModalActive} closeModalWindow={closeModalWindow} />
            </div>
        </div>
    );
};

export default NotAuthorized;