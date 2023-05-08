import React, { useState } from 'react'
import Remove from '../img/update/remove.svg'
import Update from '../img/update/update.svg'

import Inp from '../Inputs/Inp'
import { useNavigate } from 'react-router-dom'

const UpdateAd = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [priceDay, setPriceDay] = useState("")
    const [priceWeek, setPriceWeek] = useState("")
    const [priceMonth, setPriceMonth] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")


  return (
    <>
        <div className="update-wrapper">
            <div className="update-container">
                <span className="title-update">Редактирование объявления</span>
                <div className="blocks">
                    <div className='photo-block-update'>
                        <div className="photo-upd">ТУт фото</div>
                        <div className="btn-upd">
                            <div>
                                <img src={Update} alt="" />
                                <input type="file" id="update" />
                                <label htmlFor='update' className='update' >Изменить</label>
                            </div>
                            <div>
                            <img src={Remove} alt="" />
                                <input type="file" id="remove" />
                                <label htmlFor='remove' className='remove' >Удалить</label>
                                
                            </div>
                        </div>
                    </div>
                <div className='form-main-update'>
                    <Inp value={name} setValue={setName} placeholder="Название"/>
                    <Inp value={category} setValue={setCategory} placeholder="Категория"/>
                    <Inp value={price} setValue={setPrice} placeholder="Полная стоимость" />
                </div>
                <div className='form-second-update'>
                    <>
                        <Inp value={priceDay} setValue={setPriceDay} placeholder="В день" />
                        <Inp value={priceWeek} setValue={setPriceWeek} placeholder="В неделю" />
                        <Inp value={priceMonth} setValue={setPriceMonth} placeholder="В месяц" />
                        </>
                    <Inp value={city} setValue={setCity} placeholder="Город" />
                    <Inp value={address} setValue={setAddress} placeholder="Адрес передачи" />
                </div>
                
                </div>
                <div className="btns-block">
                    <div className="cancel" onClick={() => navigate("/profile")}>Отменить</div>
                    <div className="save" >Сохранить</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UpdateAd