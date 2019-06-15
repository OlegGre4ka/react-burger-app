import React from 'react';
import classes from './SideDrower.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrower = props => {
const openSideDrower = props.open ? classes.Open : classes.Close;
    return (
        <>
            <Backdrop className={openSideDrower} show={props.open} closed={props.showSideDrower}/>
            <div className={[classes.SideDrower, openSideDrower].join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    )
}

export default sideDrower