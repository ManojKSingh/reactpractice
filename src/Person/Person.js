import React from 'react';

const Person = (props) => {
    return (
        <div onClick={props.click}>HI This is {props.name} component</div>
    );
}

export default Person;