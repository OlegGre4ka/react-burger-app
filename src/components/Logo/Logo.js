import React from 'react';
import classes from './Logo.module.scss';
import burgerLogo from '../../assets/images/burger-logo.png'
const logo = props => {
    return (
      <div className={classes.Logo}>
          <img className={classes.Img} src={burgerLogo} alt='BurgerLogo'/>
      </div>
           
        )
}

export default logo