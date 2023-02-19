import React from 'react';
import "../Inputs/input.css";

const Input = (props) => {
    return (
        <div>
            <input onChange={(event) => props.setValue(event.target.value)} 
                value={props.value} 
                type={props.type} 
                placeholder={props.placeholder} 
                className="input"/>
        </div>
    );
};

export default Input;