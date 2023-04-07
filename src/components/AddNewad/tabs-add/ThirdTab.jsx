import React from 'react';
import CheckBox from '../../checkbox/CheckBox';
import Inputt from '../../input-new-add/Inputt';
import "../style.css"



const ThirdTab = ({data, setData}) => {
let a = document.getElementById("inp-body-third-one"),
    b = document.getElementById("inp-body-third-two")
   
    const onCheck = () => {
       let summa = parseInt(a.value) * 7;
        b.value = summa;
    }


    return (
        <div>
            <div className="wrapper-rent">

                <div className="left-side">

                    <div className="name-body-rent">Установите цену аренды</div>
                    
                    <div className="container-price">
                        <div className="wrapper-inp">
                            <span className='name-inp-ad'>В день</span>
                            <input id="inp-body-third-one" placeholder="В день (₽)" 
                                onChange={(e) => setData({...data, priceDay: e.target.value})}
                                value={data.priceDay}/>
                        </div>

                        <div className="wrapper-inp">
                            <span className='name-inp-ad'>В неделю</span>
                            <input id="inp-body-third-two" placeholder="В неделю (₽)" 
                                onChange={(e) => setData({...data, priceWeek: e.target.value})}
                                value={data.priceWeek}/>
                        </div>
                        <div className="wrapper-inp">
                            <span className='name-inp-ad'>В месяц</span>
                            <input id="inp-body-third-three" placeholder="В месяц (₽)" 
                                onChange={(e) => setData({...data, priceMonth: e.target.value})}
                                value={data.priceMonth}/>
                        </div>
                    </div>

                    <div className="input-checkbox">
                        <CheckBox onClick={() => onCheck} />
                    </div>

                    <div className='photo-body-rent'>Выберите город</div>
                    <input placeholder="Город" 
                        onChange={(e) => setData({...data, city: e.target.value})}
                        value={data.city}/>

                    <div className='photo-body-rent'>Укажите адрес передачи</div>
                    <input placeholder="Адрес" 
                        onChange={(e) => setData({...data, address: e.target.value})}
                        value={data.address}/>
                   

                </div>

                <div className="right-side">
                    <div className="container-rigt-side">

                        <div className="information-div">

                            <div className='title-div first'>
                                Автоматический расчет <br />
                                цены автоматически <br />
                                рекомендует скидки на <br />
                                длительные периоды аренды.
                            </div>

                        </div>

                    </div> 
            </div>
        </div>
    </div>
    );
};

export default ThirdTab;