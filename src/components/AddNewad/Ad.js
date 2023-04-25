import React from 'react'
import Photo from '../img/addNew/closes1.png'
import { Link } from "react-router-dom";

export const Ad = (
 {
  _id,
  user,
  name,
  priceDay,
  viewsCount,
 }
  ) =>  {

  // const onSelect = () => {
  //   return redirect("/login");
  // }
    return (
      <Link to={`/AllAds/${_id}`} className='A'><div className='add-wrapper'>
        <div className='add-container'>
          <img className='img-ad' src={Photo} alt='photo' />
           <p className='title-ad'>{name} </p>
          <p className='price-ad'>{priceDay}  ₽/день</p>
          <span className='title-ad'>Просмотров: {viewsCount}</span>
          <span className="username-second">{user}</span>
        </div>
      </div>
      </Link>
      )
  

}

