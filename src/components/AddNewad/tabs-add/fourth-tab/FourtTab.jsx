import React from 'react';
import "../fourth-tab/fourth-tab.css"
import { useNavigate } from "react-router-dom";

const FourtTab = () => {
    const navigate = useNavigate();
    
    return (
        <div className='wrapper-fourth'>
            <div className="header-body-rent">Шаг 4</div>
            <span className='done-fourth'>Готово!</span>
            <span className='describe-fourth'>В скором времени Ваше объявление будет опубликовано</span>
            <div className='btn-home_page' onClick={() => navigate("/")} >Вернуться на главную</div>
        </div>
    );
};

export default FourtTab;