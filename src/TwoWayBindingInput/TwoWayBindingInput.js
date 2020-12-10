import React from 'react'

const TwoWayBindingInput = (props) => {
    return (
        <input type="text" value={props.defaultVal} onChange={props.onchange}/>
    );
}
export default TwoWayBindingInput;