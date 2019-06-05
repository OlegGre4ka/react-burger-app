import React from 'react';
import classes from './NavigationItem.module.scss';

const navigationItem = props => {
    console.log(props.active,'props.active')
    const active = props.active?classes.Active:null;
    return (
        <li className={classes.NavigationItem}>
            <a className={[classes.A, active].join(' ')} href={props.link}>{props.children}</a>
            </li>
      
        )
}

export default navigationItem