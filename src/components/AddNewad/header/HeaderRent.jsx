import React from 'react';

import '../header/header-rent.css';
import {ReactComponent as Img} from '../../img/addNew/image.svg';
import {ReactComponent as Img1} from '../../img/addNew/tasksquare.svg';
import {ReactComponent as Img2}from '../../img/addNew/location.svg';
import {ReactComponent as Img3} from '../../img/addNew/arrowcircledown.svg';
import Eli from '../../img/addNew/Ellipse.svg';



const HeaderRent = ({page}) => {

    return (

        <div className="wrapper-header-rent">
            <div className="header-new">


                <div className={page === 0 ? "img-new active" : "img-new "}><Img className={page === 0 ? "img-header active" : "img-header "} /></div>
                
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />

                <div className={page === 1 ? "img-new active" : "img-new "}><Img1 className={page === 1 ? "img-header active" : "img-header "} /></div>
                 
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />

                <div className={page === 2 ? "img-new active" : "img-new "}><Img2 className={page === 2 ? "img-header active" : "img-header "} /></div>
                 
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />

                <div className={page === 3 ? "img-new active" : "img-new "}><Img3 className={page === 3 ? "img-header active" : "img-header "} /></div>

            </div> 
</div>
    );
};

export default HeaderRent;