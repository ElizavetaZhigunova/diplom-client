import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './style.css';
import FirstTab from './tabs-add/FirstTab'
import SecondTab from './tabs-add/SecondTab'
import ThirdTab from './tabs-add/ThirdTab'
import FourtTab from './tabs-add/FourtTab'
import HeaderRent from './header/HeaderRent';
import { createAd } from '../../actions/ad'





const BodyRent = () => {
    const [page, setPage] = useState(0)
    const titles = ["Шаг 1", "Шаг 2", "Шаг 3", "Шаг 4"]
    const navigate = useNavigate()


    const [data, setData] = useState({
        name: '', 
        photo: '', 
        category: '', 
        price: '', 
        priceDay: '', 
        priceWeek: '', 
        priceMonth: '', 
        city: '', 
        address: ''
    })
   

    const PageDisplay = () => {
        if (page == 0) {
            return <FirstTab data={data} setData={setData} />
        } else if (page == 1) {
            return <SecondTab data={data} setData={setData}/>
        } else if (page == 2) {
            return <ThirdTab data={data} setData={setData}/>
        } else {
            return <FourtTab/>
        }
    }
   
    /* 

//     const [toggleState, setToggleState] = useState(1);
    
//     const onBtnNext = (index) => {
//         setToggleState(index);
//     }

//     return (
//         <form>
//             <div className={toggleState === 1 ? "container-rent active" : "container-rent"} >
//                 <HeaderRent toggleState={toggleState}/>
//                 <FirstTab />
//                 <div className="container-btn">
//                     <div className="btn-next" onClick={() => onBtnNext(2)}>Далее</div>  
//                 </div>
//             </div>


//             <div className={toggleState === 2 ? "container-rent active" : "container-rent"}>
//                 <HeaderRent toggleState={toggleState}/>
//                 <SecondTab />
//                 <div className="container-btns">
//                     <button className="btn-back" onClick={() => onBtnNext(1)}>Назад</button>
//                     <button className="btn-next" onClick={() => onBtnNext(3)}>Вперед</button>
//                 </div>

//             </div>

//             <div className={toggleState === 3 ? "container-rent active" : "container-rent"}>
//                 <HeaderRent toggleState={toggleState} />
//                 <ThirdTab />
//                 <div className="container-btns">
//                     <button className="btn-next" onClick={() => onBtnNext(2)}>Назад</button>
//                     <button type='submit' className="btn-next" onClick={() => onBtnNext(4)}>Вперед</button>
//                 </div>
//             </div>

//             <div className={toggleState === 4 ? "container-rent active" : "container-rent"}>
//                 <HeaderRent toggleState={toggleState} />
//                 <FourtTab />
//             </div>
//         </form>
//     );*/
    return (
        <div>
            <HeaderRent />
            <div className='title-div'>
                <h1 >{titles[page]}</h1>
            </div>
            <div>
                <div>
                    <div>{PageDisplay()}</div>
                    <div className="container-btn">
                        <button disabled={page == 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1)
                            }}
                            className="btn-back">
                            Назад
                        </button>

                        <button 
                            onClick={(e) => {
                                if (page === 2) {
                                    createAd(data)
                                    navigate('/uploadAdd')
                                    
                                } else {
                                    setPage((currPage) => currPage + 1)
                                    
                                }
                            }}
                            className="btn-next">
                            {page === 2 ? "Отправить" : "Далее"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    
};


export default BodyRent;