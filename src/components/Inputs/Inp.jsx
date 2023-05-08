import React from 'react';
import "../Inputs/input.css";

const Inp = (props) => {
    return (
        <div>
            <input onChange={(event) => props.setValue(event.target.value)} 
                value={props.value} 
                type={props.type} 
                placeholder={props.placeholder} 
                className={props.className}/>
        </div>
    );
};

export default Inp;