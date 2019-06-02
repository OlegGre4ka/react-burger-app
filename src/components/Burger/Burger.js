import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey=>{return[...Array(props.ingredients[igKey])].map((_,i)=>{
            return  <BurgerIngredient key={igKey+i} type={igKey}/>
    })
})
    console.log(transformedIngredients,props.ingredients['salad'],'transformedIngredients')
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default burger