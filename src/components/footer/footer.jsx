import React from 'react';
import "../footer/footer.css";
import Logo from "../img/logo.svg";

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="footer-wrapper">
                <div className="header-footer">
                        <img className='logo' src={Logo} alt="" />
                    <div className='footer-title main'>
                        Доска объявлений для аренды вещей <br /> с безопасными сделками.
                    </div> 
                </div>
                
                
                <div className="footer-content">
                    <div className="foot-cont">
                        <div className="footer-title">
                            О нас
                        </div>
                        <div className="footer-item">
                            <div className="fItems">
                                Контакты
                            </div>
                            <div className="fItems">
                                Кто мы и что <br />
                                делаем?
                            </div> 
                        </div>
                    </div>
                    <div className="foot-cont">
                        <div className="footer-title">
                            Помощь
                        </div>
                        <div className="footer-item">
                        <div className="fItems">
                                Доставка
                            </div>
                            <div className="fItems">
                                Шаблон договора <br />
                                аренды
                            </div> 
                            <div className="fItems">
                                Безопасность и <br />
                                гарантии
                            </div> 
                        </div>
                    </div>
                    <div className="foot-cont">
                        <div className="footer-title">
                            Для владельцев
                        </div>
                        <div className="footer-item">
                        <div className="fItems">
                                Как сдать в аренду
                            </div>
                            <div className="fItems">
                                Публикация объявления
                            </div> 
                            <div className="fItems">
                                Прокатным компаниям
                            </div> 
                        </div>
                    </div>
                    <div className="foot-cont">
                        <div className="footer-title">
                            Для арендаторов
                        </div>
                        <div className="footer-item">
                            <div className="fItems">
                               Как взять в аренду
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-copyr'>
                <div className="company">
                Copyright © 2022 Fashion for rent. Все права защищены
                </div>
                <div className="ofert">
                Используя сайт, вы принимаете правила оферты
                </div>
            </div>
        </footer>
    );
};

export default Footer;