import React from 'react';
import "../style.css"
import { useNavigate } from "react-router-dom";

const FourtTab = () => {
    const navigate = useNavigate();
    
    return (
        <div className='wrapper-fourth'>
            <span className='done-fourth'>Готово!</span>
            <span className='describe-fourth'>В скором времени Ваше объявление будет опубликовано</span>
            <div className='btn-home_page' onClick={() => navigate("/")} >Вернуться на главную</div>
        </div>
    );
};

export default FourtTab;