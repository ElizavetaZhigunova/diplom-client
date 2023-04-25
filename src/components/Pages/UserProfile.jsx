import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../reducers/userReducer'
import { useNavigate } from 'react-router-dom'

import Korzina from '../img/profile/korzina.svg'
import Bag from '../img/profile/bag.svg'
import Exit from '../img/profile/exit.svg'
import History from '../img/profile/history.svg'
import Lock from '../img/profile/lock.svg'
import Profile from '../img/profile/profile.svg'
import UserRents from '../users-pages/UserRents'
import UserAds from '../users-pages/UserAds'
import UserProfile from '../users-pages/UserProfile'
import UserHistory from '../users-pages/UserHistory'
import UserPassword from '../users-pages/UserPassword'


const UserInfo = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState(0)
    const titles = ["Арендую", "Сдаю", "Аккаунт", "История заказов", "Пароль"]

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)

    const PageDisplay = () => {
        if (page == 0) {
            return <UserRents  />
        } else if (page == 1) {
            return <UserAds />
        } else if (page == 2) {
            return <UserProfile />
        } else if (page == 3) {
            return <UserHistory />
        } else {
            return <UserPassword />
        }
    }

  return (
     <div className="UserInfo-wrapper">
        <div className="userInfo-container">
            <div className='userInfo-menu'> 
                <div className="userInfo">
                    <div className="userPhoto">
                        {user.photo}
                    </div>
                    <div className="userName">
                        {user.name}
                    </div>
                </div>
                <div className='first-div-user'>
                    <div className={page === 0 ? "item-menu active" : "item-menu "}
                        onClick={() => setPage((currPage) => currPage = 0)}>
                        <img src={Korzina} alt="" />
                        <span className='li-menu' >Арендую</span>
                    </div>
                    <div className={page === 1 ? "item-menu active" : "item-menu "}
                        onClick={() => setPage((currPage) => currPage = 1)}>
                        <img src={Bag} alt="" />
                        <span className='li-menu' >Сдаю</span>
                    </div>
                </div>
                <div className='first-div-user'>
                    <div 
                        className={page === 2 ? "item-menu active" : "item-menu "}
                        onClick={() => setPage((currPage) => currPage = 2)}
                        >
                        <img src={Profile} alt="" />
                        <span className='li-menu' >Аккаунт</span>
                    </div>
                    <div className={page === 3 ? "item-menu active" : "item-menu "}
                        onClick={() => setPage((currPage) => currPage = 3)}>
                        <img src={History} alt="" />
                        <span className='li-menu' >История <br /> заказов</span>
                    </div>
                    <div className={page === 4 ? "item-menu active" : "item-menu "}
                        onClick={() => setPage((currPage) => currPage = 4)}>
                        <img src={Lock} alt="" />
                        <span className='li-menu' >Пароль</span>
                    </div>
                </div>
                <div className="btn-log-out">
                    <img src={Exit} alt="" />
                    <span className='li-menu' onClick={() => {dispatch(logout()); navigate('/')}}>Выйти из <br /> аккаунта</span>
                </div>
            </div>

            <div className="rents">
                <div className="rentsName">
                    <span className='rents-h3'>{titles[page]}</span>
                </div>
                {PageDisplay()}
            </div>
        </div>
    </div>
    
  )
}

export default UserInfo