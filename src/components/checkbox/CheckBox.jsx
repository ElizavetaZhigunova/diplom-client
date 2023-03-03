import React, { useState} from 'react';
import { animated, useSpring} from 'react-spring';
import "../checkbox/checkbox.css";

const CheckBox = () => {
    const [checked, setChecked] = useState(false);
    const checkboxAnimationStyle = useSpring({
        backgroundColor: checked ? "#484848" : "#fff",
        borderColor: checked ? "#555555" : "#484848"
      });

    return (
        <label className='label'>
            <input type="checkbox" onChange={() => {setChecked(!checked);}}/>
            <animated.svg
                style={checkboxAnimationStyle}
                className={`checkbox ${checked ? "checkbox--active" : ""}`}
            
                aria-hidden="true"
                viewBox="0 0 15 11"
                fill="none">

                <animated.path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={checked ? "#fff" : "none"} />
            </animated.svg>
            <span className='checkbox-label'>Автоматический рассчет стоимости</span>
        </label>
    );
};

export default CheckBox;