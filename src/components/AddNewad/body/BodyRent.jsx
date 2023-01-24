import React from 'react';
import Inputt from '../../input-new-add/Inputt';

import '../body/body-rent.css';

import Img from "../../img/addNew/img.svg";



const BodyRent = () => {
    return (
        <div className='container-rent'>
            <div className="wrapper-rent">
                <div className="header-body-rent">Шаг 1</div>
                <div className="left-side">
                    
                    <div className="name-body-rent">Название товара</div>

                    
                    <Inputt placeholder="Наименование"/>

                    <div className='photo-body-rent'>Добавьте фотографии</div>

                    <div class="input__wrapper">
                        
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BodyRent;