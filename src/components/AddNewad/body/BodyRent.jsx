import React from 'react';

import '../body/body-rent.css';
import { useState } from 'react';
import HeaderRent from '../header/HeaderRent';
import FirstTab from '../tabs-add/first-tab/FirstTab';
import SecondTab from '../tabs-add/second-tab/SecondTab';
import ThirdTab from '../tabs-add/third-tab/ThirdTab';
import FourtTab from '../tabs-add/fourth-tab/FourtTab';

// import Img from "../../img/addNew/img.svg";



const BodyRent = () => {

    const [toggleState, setToggleState] = useState(1);
    
    const onBtnNext = (index) => {
        setToggleState(index);
    }

    return (
        <>
            <div className={toggleState === 1 ? "container-rent active" : "container-rent"} >
                <HeaderRent toggleState={toggleState}/>
                <FirstTab />
                <div className="container-btn">
                    <div className="btn-next" onClick={() => onBtnNext(2)}>Далее</div>  
                </div>
            </div>


            <div className={toggleState === 2 ? "container-rent active" : "container-rent"}>
                <HeaderRent toggleState={toggleState}/>
                <SecondTab />
                <div className="container-btns">
                    <button className="btn-back" onClick={() => onBtnNext(1)}>Назад</button>
                    <button className="btn-next" onClick={() => onBtnNext(3)}>Вперед</button>
                </div>

            </div>

            <div className={toggleState === 3 ? "container-rent active" : "container-rent"}>
                <HeaderRent toggleState={toggleState} />
                <ThirdTab />
                <div className="container-btns">
                    <button className="btn-next" onClick={() => onBtnNext(2)}>Назад</button>
                    <button className="btn-next" onClick={() => onBtnNext(4)}>Вперед</button>
                </div>
            </div>

            <div className={toggleState === 4 ? "container-rent active" : "container-rent"}>
                <HeaderRent toggleState={toggleState} />
                <FourtTab />
            </div>
        </>
    );
};

export default BodyRent;