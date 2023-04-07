import React, { useEffect, useState } from 'react'
import axios from '../../reducers/axios'
import { useParams } from "react-router-dom";
import './style.css'
import Photo from '../img/addNew/closes1.png'
import Caret from '../img/addNew/chevron-left.svg'
import Person from '../img/addNew/person.svg'
import Footer from '../footer/footer'
import { useNavigate } from 'react-router-dom'
import { Ad } from '../AddNewad/Ad'

export const FullAd = () => {

    const [data, setData] = useState()

    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        axios
          .get(`/addNew/${id}`)
          .then((res) => {
            setData(res.data);
           
          })
          .catch((err) => {
            console.warn(err);
            alert('Ошибка при получении статьи');
          });
      }, []);

      

  return (
    <>
        <div className="fullad-wrapper">
            <div className="fullad-container">
                <div className="navigate-back">
                    <span className="first-menu" onClick={() => navigate(-1)} >Женская одежда и обувь</span>
                    <img src={Caret} alt="" />
                    <span className="second-menu">lll</span>
                </div>
                <Ad
                //     id={data._id}
                //     user={data.user}
                //     name={data.name}
                //     category={data.category}
                //     priceDay={data.priceDay}
                //     viewsCount={data.viewsCount}
                //   createdAt={data.createdAt}

                
                />
                {/* <div className="name-ad">
                    <span className="name-title">{}</span>
                </div>
                <div className="ad-content">
                    <div className="ad-content-container">
                        <div className="mini-photo">
                            <div className="mini-one"><img className='mini' src={Photo} alt="" /></div>
                            <div className="mini-one"><img className='mini' src={Photo} alt="" /></div>
                            <div className="mini-one"><img className='mini' src={Photo} alt="" /></div>
                        </div>
                        <div className="main-photo">
                            <img className='main' src={Photo} alt="" />
                        </div>
                        <div className="info-blok">
                            <div className="info-blok-container">
                                    <div className="user-info">
                                        <div className="photo-user">
                                            <img src={Person} alt="" />
                                        </div>
                                        <span className="username">{user}</span>
                                        
                                    </div>

                                    <div className="price-blok">{priceDay}</div>
                            
                                <div className="feedback">
                                    <span className="title-feedback">Начало аренды</span>
                                    <textarea className='textarea' name="" id="" cols="30" rows="10" placeholder='Введите даты на которые вы бы хотели забронировать вещь ...'>
                                    </textarea>
                                    <button className="feedback-submit">Запросить аренду</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="main-info">
                            <div className="main-info-title">
                                <span className='info-title'>Основная информация</span>
                            </div>
                            <div className="main-info-text">
                                <span className='info-text'>Замечательное вечернее платье отлично подойдет для празднования
Новoго года в кругу друзей. Вы будете блестать на празднике, от восхищенных
взглядов некуда будет спрятаться</span>
                            </div>
                    </div>

                    <div className="user-info-big">
                        <div className="photo-user second">
                            <img src={Person} alt="" />
                        </div>
                        <div className="right-blok">
                            <div className="nameuser">
                                <span className="username-second">Имя пользователя</span>
                            </div>
                            <button className="write">Написать</button>
                        </div>
                    </div>

                    <div className="info-ad">
                        <span>Товар id: 3232324fd64 размещен 2 декабря 2022 г.</span>
                        <span>Нужна помощь? Просто свяжитесь с владельцем в чате или свяжитесь со службой поддержки</span>
                    </div> */}
                </div>
                <Footer/>
            </div>
            
    </>
  )
}
