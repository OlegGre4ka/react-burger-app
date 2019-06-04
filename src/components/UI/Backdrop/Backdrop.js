import React from 'react';
import classes from './Backdrop.module.scss';

const backdrop = props => {
    return(
        props.show && <div onClick={props.closed} className={classes.Backdrop}></div> 
    )
}
export default backdrop