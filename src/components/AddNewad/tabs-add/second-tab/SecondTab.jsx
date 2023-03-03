import React from 'react';
import Inputt from '../../../input-new-add/Inputt';
import "../second-tab/second-tab.css"

const SecondTab = () => {
    return (
        <div>
            <div className="header-body-rent">Шаг 2</div>

                <div className="wrapper-rent">
    
                    <div className="left-side">
        
                        <div className="name-body-rent">Выберите категорию</div>
                        <Inputt id="inp-body" placeholder="Категория" />
                        <div className='photo-body-rent'>Укажите стоимость</div>
                        <Inputt placeholder="Стоимость товара" />
                        <p className='describe'>Пожалуйста, установите точную цену - вы будете застрахованы только до <br />
                            указанного значения, если что-то пойдет не так.
                        </p>

                    </div>

                    <div className="right-side">
                        <div className="container-rigt-side">

                            <div className="information-div">

                                <div className='title-div first'>
                                    Стоимость товара <br />
                                    означает за какую цену в <br />
                                    среднем можно купить <br />
                                    такой же товар на <br />
                                    досках объявлений.
                                </div>

                            </div>
                
                        </div> 
                    </div>
                </div>
        </div>
    );
};

export default SecondTab;