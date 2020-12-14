import React from 'react';
import styles from './Char.css'

const Char = (props) => {
    // const style = {
    //     display : "inline-block",
    //     margin : "10px",
    //     padding: "10px",
    //     border: "1px solid #000"
    // }
    return (
        <div  className={styles.boxes} onClick={props.clicked}>
            {props.value}
        </div>
    );
}

export default Char