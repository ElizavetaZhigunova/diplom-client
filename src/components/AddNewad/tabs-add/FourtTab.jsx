import React from 'react';
import "../style.css"
import { useNavigate } from "react-router-dom";
import Footer from '../../footer/footer';
import HeaderRent from '../header/HeaderRent';

const FourtTab = () => {
    const navigate = useNavigate();
    
    return (
        <div className='wrapper-fourth'>
            <HeaderRent/>
            <div className='container-fourth'>
                
                <span className='title-div'>Шаг 4</span>
                <span className='done-fourth'>Готово!</span>
                <span className='describe-fourth'>В скором времени Ваше объявление будет опубликовано</span>
                <div className='btn-home_page' onClick={() => navigate("/")} >Вернуться на главную</div>
            </div>
            <Footer/>
        </div>
    );
};

export default FourtTab;