import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
// var _ = require('lodash');
import _ from 'lodash';


const burger = props => {
    //     let transformedIngredient = Object.keys(props.ingredients)
    //     .map(igKey=>{return[...Array(props.ingredients[igKey])].map((_,i)=>{
    //             return  <BurgerIngredient key={igKey+i} type={igKey}/>
    //     })
    // })
    // .reduce((arr,el)=>{return arr.concat(el)},[])

    //-----------------------------------------------------------------------------
    // Here I used the Lodash methods
    // const ingredientsAsArray = _.toPairs(props.ingredients);
    //native JS method
    const ingredientsAsArray = Object.entries(props.ingredients);

    let transformedIngredients =/* _.flatten*/(ingredientsAsArray.flatMap(item =>
        _.times(item[1], _.constant(item[0]))
        )
    )
    // .flat();
    // console.log( transformedIngredients, 'ingredients-Burger');
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients.length === 0 ?
                transformedIngredients = <p>Please start adding ingredients!</p> :
                transformedIngredients.map((ingredient, i) => <BurgerIngredient key={i + ingredient} type={ingredient} />)}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
export default burger