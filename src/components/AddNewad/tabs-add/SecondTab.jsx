import React from 'react';
import Inputt from '../../input-new-add/Inputt';
import "../style.css"

const SecondTab = ({data, setData}) => {
    return (
        <div>
                <div className="wrapper-rent">
    
                    <div className="left-side">
        
                        <div className="name-body-rent">Выберите категорию</div>
                        <input id="inp-body" placeholder="Категория" 
                            onChange={(e) => setData({...data, category: e.target.value})}
                            value={data.category}/>
                        <div className='photo-body-rent'>Укажите стоимость</div>
                        <input placeholder="Стоимость товара" 
                            onChange={(e) => setData({...data, price: e.target.value})}
                            value={data.price}/>
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