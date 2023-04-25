import React from 'react'
import { useSelector } from 'react-redux'
import './style.css'

const UserProfile = () => {

  const user = useSelector(state => state.user.currentUser)
  return (
    <>
      <span className='user-id'>id {user.id}</span>
      <div className="photo-profile-container">
        <div className="photo-user-profile">
          {user.photo}
        </div>
        <div className="right-side-prof">
          <span className='info-abaout-photo'>Пожалуйста, загрузите фотографию, <br />
            которая показывает ваше лицо. <br />
            Четкие фотографии важны, чтобы члены нашего<br />
            сообщества могли больше доверять друг другу.
          </span>
          <label className='file-user' htmlFor="file-user">Загрузить фотографию</label>
          <input type="file" id='file-user' name='image' accept='image/*'/>
        </div>
      </div>
      <div className="user-info-prof">
        <div className="user-info-prof-container">
          <div className='info-user'>
            <span className="title">Имя</span>
            <span className='current-user'>{user.name}</span>
            <span className="change-info">Изменить имя</span>
          </div>
          <div className='info-user'>
            <span className="title">Фамилия</span>
            <span className='current-user'>{user.lastname}</span>
            <span className="change-info">Изменить фамилию</span>
          </div>
          <div className='info-user'>
            <span className="title">E-mail</span>
            <span className='current-user'>{user.email}</span>
            <span className="change-info">Изменить e-mail</span>
          </div>
          <div className='info-user'>
            <span className="title">Номер телефона</span>
            <span className='current-user'>{user.phone}</span>
            <span className="change-info">Изменить номер телефона</span>
          </div>
        </div>
        
      </div>

      
    </>
  )
}

export default UserProfile