import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import { createAd } from '../../actions/ad'

import Inputt from '../input-new-add/Inputt'



const BodyRent = () => {
    const titles = ["Шаг 1", "Шаг 2", "Шаг 3", "Шаг 4"]
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [priceDay, setPriceDay] = useState("")
    const [priceWeek, setPriceWeek] = useState("")
    const [priceMonth, setPriceMonth] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")

    return (
        <>
        <div className="form-wrapper">
            <div className='title-div'>
                <h1>Шаг 1</h1>
            </div>
            <div className="inputs-container">
                <Inputt value={name} setValue={setName} placeholder="Введите название" />
                <label htmlFor="img-new">Прикрепите фото</label>
                <Inputt accept='image/*' type="file" id="img-new" value={photo} setValue={setPhoto} />
                <Inputt value={category} setValue={setCategory} placeholder="Введите категорию" />
                <Inputt value={price} setValue={setPrice} placeholder="Введите полную стоимость" />
                <Inputt value={priceDay} setValue={setPriceDay} placeholder="Введите стоимость за день ареды" />
                <Inputt value={priceWeek} setValue={setPriceWeek} placeholder="Введите стоимость за неделю аренды" />
                <Inputt value={priceMonth} setValue={setPriceMonth} placeholder="Введите стоимость за месяц аренды" />
                <Inputt value={city} setValue={setCity} placeholder="Введите ваш город" />
                <Inputt value={address} setValue={setAddress} placeholder="Введите адрес встречи с арендатором" />
            </div>
        </div>
            
            <div>
                <div>
                    <div className="container-btn">
                        <button 
                            onClick={(e) => {
                                createAd({name, photo, category, price, priceDay, priceWeek, priceMonth, address, city})
                                // navigate('/uploadAdd')
                            }}
                            className="btn-next">
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
    
};


export default BodyRent;