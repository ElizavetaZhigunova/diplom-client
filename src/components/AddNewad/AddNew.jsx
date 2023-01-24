import React from 'react';
import "../AddNewad/AddNew.css";
import BodyRent from './body/BodyRent';
import HeaderRent from './header/HeaderRent';




const AddNew = () => {
    return (
        <div className='AddNew'>
            <div className="addNew-wrapper">
                <HeaderRent />
                <BodyRent/>
                
            </div>
        </div>
    );
};

export default AddNew;