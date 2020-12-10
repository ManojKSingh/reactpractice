import React from 'react';

const InputValue = (props) => {
    return (
        <input type="text" onChange={props.change} value={props.currentVal}/>
    )
}

export default InputValue;