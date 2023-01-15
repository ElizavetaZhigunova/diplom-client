import React from 'react';
//import Login from '../components/login/children/Login';
//import Loginn from '../components/login/login';
import Tabs from '../tabs/Tabs';
import './modal-window.css';


const ModalWindow = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()} >
               <Tabs/>
            </div>
        </div>
    );
};

export default ModalWindow;