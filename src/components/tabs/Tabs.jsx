import React, {useState} from 'react';
import Reg from '../login/children/Reg';
import Login from '../login/children/Login';
import './tabs.css';


const Tabs = ({closeModalWindow}) => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
        console.log(index)
    }
   // "tabs active-tabs"

    return (
        <div className='tabs__container'>

            <div className="block-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Авторизация</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} >Регистрация</div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-contents" : "content"}><Reg closeModalWindow={closeModalWindow} /> </div>
                <div className={toggleState === 2 ? "content active-contents" : "content"}><Login closeModalWindow={closeModalWindow} /> </div>
            </div> 

        </div>
    );
};

export default Tabs;