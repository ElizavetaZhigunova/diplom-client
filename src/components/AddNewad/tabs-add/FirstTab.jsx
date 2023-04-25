import React from 'react';
// import Inputt from '../../input-new-add/Inputt';
import { NavLink } from 'react-router-dom';
import Inputt from '../../input-new-add/Inputt';

const FirstTab = ({data, setData}) => {
    return (
        <div>
                <div className="wrapper-rent">
    
                    <div className="left-side">
                        
        
                        <div className="name-body-rent">Название товара <br /> </div>
                        <Inputt placeholder="Наименование" 
                            setValue={(e) => setData({...data, name: e.target.value})}
                            value={data.name}/>
                        <div className='photo-body-rent'>Добавьте фотографии</div>
                        
                        <div className="input__wrapper">
                            <Inputt type="file" onChange={(e) => setData({...data, photo: e.target.value})}
                            value={data.photo}/>
                        </div>

                    </div>

                    <div className="right-side">
                        <div className="container-rigt-side">

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
                    </div>
                </div>
        </div>
    );
};

export default FirstTab;