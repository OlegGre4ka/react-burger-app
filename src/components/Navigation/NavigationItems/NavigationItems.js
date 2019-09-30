import React from 'react';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = props => {
    // const clickedActive=()=>{

    // }
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem exact link="/" >Burger Builder</NavigationItem>
            <NavigationItem link="/checkout"/*onClick={}*/ >Checkout</NavigationItem>

        </ul>
    )
}

export default navigationItems