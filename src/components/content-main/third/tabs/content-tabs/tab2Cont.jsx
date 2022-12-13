import React from 'react';
import Own1 from "../../../../img/owners1.jpg";
import Own3 from "../../../../img/owners3.jpg";
import Own2 from "../../../../img/owners2.jpg";

const Tab2Cont = () => {
    return (
        <div className='tab1-cont'>
        <div className='tab1-cont1'>
            <div className='tab1-img'>
                <img src={Own1} alt="" />
            </div>
            <div className='tab'>
                <div className='tab1-header right'>Разместите объявление</div>
                <div className='tab1-text right'>
                    Качественно составленное объявление <br />
                    будет выгодно отличать вас от других <br />
                    арендодателей и притягивать больше <br /> 
                    заявок
                </div>
            </div>
        </div>

        <div className='tab1-cont1 left'>
            <div className='tab1-img'>
                <img src={Own2} alt="" />
            </div>
            <div className='tab left'>
                <div className='tab1-header'>
                    Принимайте заявки на <br /> 
                    аренду
                </div>
                <div className='tab1-text'>
                    Реагируйте, как можно скорее, чтобы не <br /> 
                    заставлять арендатора сомневаться. Это <br /> 
                    поможет увеличить шансы на сделку
                </div>
            </div>
        </div>

        <div className='tab1-cont1'>
            <div className='tab1-img'>
                <img src={Own3} alt="" />
            </div>
            <div className='tab'>
                <div className='tab1-header right'>
                    Передайте товар в <br />
                    пользование
                </div>
                <div className='tab1-text right'>
                    Позаботьтесь, чтобы товар был чистым, а <br /> 
                    также соответствовал описанию и <br /> 
                    комплектации в объявлении
                </div>
            </div>
        </div>
    </div>
    );
};

export default Tab2Cont;