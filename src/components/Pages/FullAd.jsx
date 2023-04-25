import React, { useEffect, useState } from "react";
import axios from "../../reducers/axios";
import { useParams } from "react-router-dom";
import "./style.css";
import Photo from "../img/addNew/closes1.png";
import Caret from "../img/addNew/chevron-left.svg";
import { useSelector } from "react-redux";
import Person from "../img/addNew/person.svg";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import { Ad } from "../AddNewad/Ad";

export const FullAd = () => {
  const { ads, category } = useSelector((state) => state.ads);
  console.log(ads);
  console.log(category);
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/AddNew/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false)
        setLoaded(true);
        console.log("success");
      })
      .catch((err) => {
        console.warn(err);
        console.log("Ошибка при получении статьи");
      });
  }, []);

  return (
    <>
    {!isLoading ? 
      <div className="fullad-wrapper">
        <div className="fullad-container">
          <div className="navigate-back">
            <span className="first-menu" onClick={() => navigate(-1)}>
              Женская одежда и обувь
            </span>
            <img src={Caret} alt="" />
            <span className="second-menu">Костюм</span>
          </div>

          <div className="name-ad">
            <span className="name-title">{data.name}</span>
          </div>
          <div className="ad-content">
            <div className="ad-content-container">
              {loaded ? (
                data.photo
              ) : null}

              <div className="info-blok">
                <div className="info-blok-container">
                  <div className="user-info">
                    <div className="photo-user">
                      <img src={Person} alt="" />
                    </div>
                    <span className="username">{}</span>
                  </div>

                  <div className="price-blok">{data.priceDay} ₽/день</div>

                  <div className="feedback">
                    <span className="title-feedback">Начало аренды</span>
                    <textarea
                      className="textarea"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Введите даты на которые вы бы хотели забронировать вещь ..."
                    ></textarea>
                    <button className="feedback-submit">
                      Запросить аренду
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-info">
              <div className="main-info-title">
                <span className="info-title">Основная информация</span>
              </div>
              <div className="main-info-text">
                <span className="info-text">
                  Замечательное вечернее платье отлично подойдет для
                  празднования Новoго года в кругу друзей. Вы будете блестать на
                  празднике, от восхищенных взглядов некуда будет спрятаться
                </span>
              </div>
            </div>

            <div className="user-info-big">
              <div className="photo-user second">
                <img src={Person} alt="" />
              </div>
              <div className="right-blok">
                <div className="nameuser">
                  <span className="username-second">{}</span>
                </div>
                <button className="write">Написать</button>
              </div>
            </div>

            <div className="info-ad">
              <span>Товар id: {data._id} размещен {data.createdAt}</span>
              <span>
                Нужна помощь? Просто свяжитесь с владельцем в чате или свяжитесь
                со службой поддержки
              </span>
            </div>
          </div>
          <Footer />
        </div>
      </div>
: <div>Loading ...</div> }
    </>
  );
};
