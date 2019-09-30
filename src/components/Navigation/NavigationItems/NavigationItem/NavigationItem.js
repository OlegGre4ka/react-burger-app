import React from 'react';
import classes from './NavigationItem.module.scss';
import {NavLink} from 'react-router-dom';

const navigationItem = props => {
    // const active = props.active ? classes.Active : null;
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
            // className={[classes.A, active].join(' ')} 
            className={classes.A} 
            exact={props.exact}
            activeClassName={classes.Active}
            to={props.link}>{props.children}</NavLink>
        </li>

    )
}

export default navigationItem