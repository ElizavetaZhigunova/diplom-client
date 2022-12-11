import React from 'react';
import "../content-tabs/tab1.css"
import Rent1 from "../../../../img/rent1.svg";
import Rent3 from "../../../../img/renters3 1.svg";
import Rent2 from "../../../../img/renters2.svg";

const Tab1Cont = () => {
    return (
        <div className='tab1-cont'>
            <div className='tab1-cont1'>
                <div className='tab1-img'>
                    <img src={Rent1} alt="" />
                </div>
                <div className='tab'>
                    <div className='tab1-header right'>Выберете свой товар</div>
                    <div className='tab1-text right'>Сравнивайте и выбирайте среди большого<br />
                        количества предложений от физлиц<br />  
                        неподалеку от вас</div>
                </div>
            </div>

            <div className='tab1-cont1 left'>
                <div className='tab1-img'>
                    <img src={Rent2} alt="" />
                </div>
                <div className='tab left'>
                    <div className='tab1-header'>Забронируйте на <br />
                        нужные даты
                    </div>
                    <div className='tab1-text'>
                        Все процессы происходят онлайн, <br />
                        поэтому вам также понадобится <br />
                        банковская карта<br />
                    </div>
                </div>
            </div>

            <div className='tab1-cont1'>
                <div className='tab1-img'>
                    <img src={Rent3} alt="" />
                </div>
                <div className='tab'>
                    <div className='tab1-header right'>Получите в<br />
                        пользование
                    </div>
                    <div className='tab1-text right'>
                        Вы можете забрать у владельца и <br />
                        вернуть ему товар самостоятельно или<br />
                        заказать доставку
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab1Cont;