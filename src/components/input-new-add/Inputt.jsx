import React from 'react';
import "../input-new-add/input.css";

const Inputt = (props) => {
    return (
        <div>
            <input onChange={(event) => props.setValue(event.target.value)} 
                required
                value={props.value} 
                type={props.type} 
                placeholder={props.placeholder} 
                className="inputt"
                id={props.id}/>
        </div>
    );
};

export default Inputt;