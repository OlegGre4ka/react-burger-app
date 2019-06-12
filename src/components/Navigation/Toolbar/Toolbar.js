import React from 'react';
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleDrower from '../SideDrower/ToggleDrower/ToggleDrower';

const toolbar = props => {
    return (
        <header className={classes.Toolbar}>
           <ToggleDrower className={classes.MobileOnly} showSideDrower={props.showSideDrower}/>

            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>

    )
}

export default toolbar