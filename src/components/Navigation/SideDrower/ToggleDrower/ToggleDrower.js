import React from 'react';
import classes from './ToggleDrower.module.scss';

const toggleDrower = props => {
    return (

           <div className={classes.DrawerToggle} onClick={props.showSideDrower}>
               <div className={classes.Hamburger}></div>
               <div className={classes.Hamburger}></div>
               <div className={classes.Hamburger}></div>
           </div>

      
    )
}

export default toggleDrower