import React, {useState} from 'react';
import "../tabs/tab.css";
import Tab1Cont from './content-tabs/tab1Content';
import Tab2Cont from './content-tabs/tab2Cont';


const MainTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  } 
    
// "tabs active-tabs"

  return (
    <div className='container__tabs'>

      <div className="tabs-block">
        <div className={toggleState === 1 ? "tabss active-tabss" : "tabss"} onClick={() => toggleTab(1)}>Арендатор</div>
        <div className={toggleState === 2 ? "tabss active-tabss" : "tabss"} onClick={() => toggleTab(2)}>Владелец</div>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "contents active-contentss" : "contents"}><Tab1Cont/> </div>
        <div className={toggleState === 2 ? "contents active-contentss" : "contents"}><Tab2Cont/> </div>
       </div> 

    </div>
  );
}

  


    

export default MainTabs;