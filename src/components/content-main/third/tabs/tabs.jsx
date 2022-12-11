import React from 'react';
import { Tabs } from 'antd';
import "../tabs/tab.css";
import Tab1Cont from './content-tabs/tab1Content';
import Tab2Cont from './content-tabs/tab2Cont';

const onChange = (key) => {
  console.log(key);
};

const MainTabs = () => (
  <div className='tab-content'>
    <div className="tab-wrapper">
      <Tabs className='tab-main'
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `Арендатор`,
            key: '1',
            children: <Tab1Cont/>,
          },
          {
            label: `Владелец`,
            key: '2',
            children: <Tab2Cont/>,
          },
        ]}
      />
    </div>
  </div>
);

export default MainTabs;