import React from 'react';
import "../AddNewad/AddNew.css";
import BodyRent from './body/BodyRent';
import HeaderRent from './header/HeaderRent';
import NotAuthorized from './dont-sign/not-authorized';
import {useSelector } from 'react-redux';
import Footer from '../footer/footer';




const AddNew = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <div className='AddNew'>
            <div className="addNew-wrapper">
              
                {isAuth && <HeaderRent />}
                {isAuth && <BodyRent/>}
                {!isAuth && <NotAuthorized/> }
               <Footer/>
                
            </div>
        </div> 
    );
};

export default AddNew;