import React from 'react';
import Inputt from '../../input-new-add/Inputt';

import '../body/body-rent.css';
import { useState } from 'react';
import HeaderRent from '../header/HeaderRent';

// import Img from "../../img/addNew/img.svg";



const BodyRent = () => {

    const [toggleState, setToggleState] = useState(1);
    
    const onBtnNext = (index) => {
        setToggleState(index);
        console.log(index)
    }
    return (
        <>
        <div className={toggleState === 1 ? "container-rent active" : "container-rent"} >
            <HeaderRent props={1} />
            <div className="header-body-rent">Шаг 1</div>
            {/* <div className="wrapper-rent">
                
                <div className="left-side">
                    
                    <div className="name-body-rent">Название товара</div>

                    
                    <Inputt placeholder="Наименование"/>

                    <div className='photo-body-rent'>Добавьте фотографии</div>

                    <div className="input__wrapper">
                        
                    </div>

                </div>

                <div className="right-side">
                    <div className="information-div">
                        <div className='title-div first'>
                            Назовите товар как 
                            можно подробнее, 
                            например Вечернее платье черное
                        </div>
                        <div className='title-div'>
                            Хорошие уникальные
                            фотографии выгодно 
                            выделят ваше 
                            объявление на фоне 
                            других. Несколько 
                            фотографий лучше чем 
                            одна.
                        </div>
                    </div>

                    
                    
                </div>

            </div> */}
            <div className="btn-next" onClick={() => onBtnNext(2)}>Далее</div>
        </div>
                    <div className={toggleState === 2 ? "container-rent active" : "container-rent"}>
                        <HeaderRent props={2}/>
                        <h1>Шаг 2</h1>
                        <button className="btn-next" onClick={() => onBtnNext(1)}>Назад</button>
                        <button className="btn-next" onClick={() => onBtnNext(3)}>Вперед</button>
                    </div>

                    <div className={toggleState === 3 ? "container-rent active" : "container-rent"}>
                        <HeaderRent props={3} />
                        <h1>Шаг 3</h1>
                        <button className="btn-next" onClick={() => onBtnNext(2)}>Назад</button>
                        <button className="btn-next" onClick={() => onBtnNext(4)}>Вперед</button>
                    </div>

                    <div className={toggleState === 4 ? "container-rent active" : "container-rent"}>
                        <HeaderRent props={4} />
                        <h1>Шаг 4</h1>
                        <button className="btn-next" onClick={() => onBtnNext(3)}>Назад</button>
                    </div>

                    
                    
                    </>
    );
};

export default BodyRent;