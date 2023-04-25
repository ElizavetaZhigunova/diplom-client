import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserAds = () => {

  const user = useSelector(state => state.user.currentUser)
  const navigate = useNavigate()

  if (user.ad == 0) {
    return (
      <>
        <span className='active-ord'>У вас пока нет никаких объявлений ...</span>
        <div className="btn-rents" onClick={() => navigate('/AddNew')}>Создать объявление</div>
      </>
    )
  } else {
    return (
      <div>{user.ad}</div>
    )
  }
  
}

export default UserAds