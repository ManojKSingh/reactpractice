import React from 'react'

const Validate = (props) => {
    console.log( props.charLength)
    return (
        props.charLength <= 5 ? <p>Too Short</p> : <p>Long enough</p>
    );
}

export default Validate;