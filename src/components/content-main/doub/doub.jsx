import React from 'react';
import "../doub/doub.css";
import First from "../../img/main1.svg";
import Second from "../../img/main2.svg";
import Third from "../../img/main3.svg"

const MiddleContent = () => {
    return (
        <div className='doub-content'>
            <div className="dwrapper">
                <div className='first acti'>
                    <img className='dcont f' src={First} alt="" />
                    <h3>Удобно</h3>
                    <p className='dtext'>Огромный выбор среди тысяч<br/>
                    предложений от физлиц рядом<br/>
                    с вами</p>
                </div>

                <div className='second acti'>
                    <img className='dcont' src={Second} alt="" />
                    <h3>Безопасно</h3>
                    <p className='dtext'>Защищенные безналичные<br/>
                        онлайн-сделки между<br/>
                        участниками площадки</p>
                </div>

                <div className='third acti'>
                    <img className='dcont' src={Third} alt="" />
                    <h3>Легко</h3>
                    <p className='dtext'>Быстрая доставка под запрос <br/> 
                        и служба поддержки к вашим <br/>
                        услугам
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MiddleContent;