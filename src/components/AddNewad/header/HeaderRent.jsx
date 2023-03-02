import React from 'react';

import '../header/header-rent.css';
import {ReactComponent as Img} from '../../img/addNew/image.svg';
import {ReactComponent as Img1} from '../../img/addNew/tasksquare.svg';
import {ReactComponent as Img2}from '../../img/addNew/location.svg';
import {ReactComponent as Img3} from '../../img/addNew/arrowcircledown.svg';
import Eli from '../../img/addNew/Ellipse.svg';
import { useState } from 'react';

const HeaderRent = ({toggleState}) => {

    return (

        
            <div className="header-new">


                <div className={toggleState === 1 ? "img-new active" : "img-new "}><Img className={toggleState === 1 ? "img-header active" : "img-header "} /></div>
                
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />

                <div className={toggleState === 2 ? "img-new active" : "img-new "}><Img1 className={toggleState === 2 ? "img-header active" : "img-header "} /></div>
                 
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />

                <div className={toggleState === 3 ? "img-new active" : "img-new "}><Img2 className={toggleState === 3 ? "img-header active" : "img-header "} /></div>
                 
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />

                <div className={toggleState === 4 ? "img-new active" : "img-new "}><Img3 className={toggleState === 4 ? "img-header active" : "img-header "} /></div>

            </div> 

    );
};

export default HeaderRent;