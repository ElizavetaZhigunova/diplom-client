import React from 'react';
import "../content-main/content-main.css";

import MiddleContent from './doub/doub';
import ContMain from './main/main';
import Third from './third/third';

const ContentMain = () => {
    return (
        <div className='content-main'>
            <ContMain />
            <MiddleContent />
            <Third />
        </div>
    );
};

export default ContentMain;