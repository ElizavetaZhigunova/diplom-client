import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserRents = () => {
  const navigate = useNavigate()

  return (
    <>
      <span className='active-ord'>У вас пока нет активных заказов ...</span>
      <div className="btn-rents" onClick={() => navigate('/AllAds')}>В каталог</div>
    </>
  )
}

export default UserRents