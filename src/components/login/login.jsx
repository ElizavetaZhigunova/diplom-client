import React, {useState} from 'react';
import "../login/login.css";
import Login from './children/Login';
import Footer from '../footer/footer';
import Reg from './children/Reg';
import "../login/children/function.js";

  
    
const Loginn = () => {  

    const items = [
      {title: 'Авторизация', content: <Login/>},
      {title: 'Регистрация', content: <Reg/>}
    ]

    const TabContent = ({ title, content }) => (
      <div className="tabcontent">
        <h3>{title}</h3>
        <p>{content}</p> 
      </div>
    ); 

    function Tabs({ items }) {
    const [ active, setActive ] = useState(null);
    const openTab = e => setActive(+e.target.dataset.index);

      return (
        <div>
          <div className="tab">
            {items.map((n, i) => (
              <button
                className={`tablinks ${i === active ? 'active' : ''}`}
                onClick={openTab}
                data-index={i}
              >{n.title}</button>
            ))}
          </div>
          {items[active] && <TabContent {...items[active]} />}
        </div>
      );
    }
Tabs(items);

};

export default Loginn;

