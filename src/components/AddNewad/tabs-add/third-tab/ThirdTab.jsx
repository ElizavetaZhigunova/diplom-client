import React from 'react';
import CheckBox from '../../../checkbox/CheckBox';
import Inputt from '../../../input-new-add/Inputt';
import "../third-tab/third.css"



const ThirdTab = () => {
let a = document.getElementById("inp-body-third one"),
            b = document.getElementById("inp-body-third two")
    const onCheck = () => {
       let summa = parseInt(a.value) * 7;
        b.value = summa;
    }

    console.log(onCheck)

    return (
        <div>
            <div className="header-body-rent">Шаг 3</div>

            <div className="wrapper-rent">

                <div className="left-side">

                    <div className="name-body-rent">Установите цену аренды</div>
                    
                    <div className="container-price">
                        <div className="wrapper-inp">
                            <span className='name-inp-ad'>В день</span>
                            <Inputt id="inp-body-third one" placeholder="В день (₽)" />
                        </div>

                        <div className="wrapper-inp">
                            <span className='name-inp-ad'>В неделю</span>
                            <Inputt id="inp-body-third two" placeholder="В неделю (₽)" />
                        </div>
                        <div className="wrapper-inp">
                            <span className='name-inp-ad'>В месяц</span>
                            <Inputt id="inp-body-third three" placeholder="В месяц (₽)" />
                        </div>
                    </div>

                    <div className="input-checkbox">
                        <CheckBox onClick={() => onCheck} />
                    </div>

                    <div className='photo-body-rent'>Выберите город</div>
                    <Inputt placeholder="Город" />

                    <div className='photo-body-rent'>Укажите адрес передачи</div>
                    <Inputt placeholder="Адрес" />
                   

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