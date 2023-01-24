import React from 'react';

import '../header/header-rent.css';
import Img from '../../img/addNew/image.svg';
import Img1 from '../../img/addNew/tasksquare.svg';
import Img2 from '../../img/addNew/location.svg';
import Img3 from '../../img/addNew/arrowcircledown.svg';
import Eli from '../../img/addNew/Ellipse.svg';

const HeaderRent = () => {
    return (
            <div className="header-new">

                <div className="img-new active">
                    <img className='img-header' src={Img} alt="" />
                    
                </div>

                <img src={Eli} alt="" />
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />

                <div className="img-new">
                    <img className='img-header' src={Img1} alt="" />
                </div>

                <img src={Eli} alt="" />
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />

                <div className="img-new">
                    <img className='img-header' src={Img2} alt="" />
                </div>

                <img src={Eli} alt="" />
                <img src={Eli} alt="" />
                <img src={Eli} alt="" />

                <div className="img-new">
                <img className='img-header' src={Img3} alt="" />
                </div>
            </div>

    );
};

export default HeaderRent;