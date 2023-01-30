import React from 'react';
import "../input-new-add/input.css";

const Inputt = (props) => {
    return (
        <div>
            <input onChange={(event) => props.setValue(event.target.value)} 
                value={props.value} 
                type={props.type} 
                placeholder={props.placeholder} 
                className="inputt"/>
        </div>
    );
};

export default Inputt;