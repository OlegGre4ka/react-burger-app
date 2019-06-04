import React from 'react';
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';

const toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav className={classes.Nav}>...</nav>
        </header>
           
        )
}

export default toolbar