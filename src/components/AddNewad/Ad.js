import React from 'react'
import Photo from '../img/addNew/closes1.png'
import { Link } from "react-router-dom";

export const Ad = (
 {
  _id,
  user,
  name,
  category,
  priceDay,
  viewsCount,
createdAt}
  ) =>  {

  // const onSelect = () => {
  //   return redirect("/login");
  // }
    return (
      <Link to={`/addNew/${_id}`} className='A'><div className='add-wrapper'>
        <div className='add-container'>
          <img className='img-ad' src={Photo} alt='photo' />
           <p className='title-ad'>{name} </p>
           <span>{category}</span>
          <p className='price-ad'>{priceDay}  ₽/день</p>
          <span>{viewsCount}</span>
          <span className="username-second">{user}</span>
          <span>Товар id: {_id} размещен {createdAt}</span>
        </div>
      </div>
      </Link>
      )
  

}

