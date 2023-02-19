import React from 'react';
import Inputt from '../../input-new-add/Inputt';

import '../body/body-rent.css';

// import Img from "../../img/addNew/img.svg";



const BodyRent = () => {
    return (
        <div className='container-rent'>
            <div className="header-body-rent">Шаг 1</div>
            <div className="wrapper-rent">
                
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
                    <div className="btn-next">Далее</div>
                </div>

            </div>
        </div>
    );
};

export default BodyRent;