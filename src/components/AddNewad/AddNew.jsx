import React from 'react';
import "./style.css";
import BodyRent from './BodyRent';
import NotAuthorized from './dont-sign/not-authorized';
import {useSelector } from 'react-redux';
import Footer from '../footer/footer';

/*Лиза гимно*/

const AddNew = () => {
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <div className='AddNew'>
      <div className="addNew-wrapper">

        {isAuth && 
          <BodyRent/>
        }

        {!isAuth &&  
          <NotAuthorized/>
        }

        <Footer/>         
      </div>
    </div> 
    );
};

export default AddNew;