import React from 'react';
import "../third/third.css"
import MainTabs from './tabs/tabs.jsx';

const Third = () => {

    return (
        <div className='third__content'>
            <h1 className='third__title'>Как это работает?</h1>
            <div className="tab-container">
                <MainTabs/>
            </div>
            
        </div>
    );
};

export default Third;