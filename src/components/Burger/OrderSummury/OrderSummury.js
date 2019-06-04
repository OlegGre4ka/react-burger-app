import React from 'react';
// import classes from './Modal.module.scss';
import Aux from '../../../hoc/Auxiliary';
const orderSummury = props => {
    const ingredients = {...props.ingredients};
    const ingredientsSummury = Object.keys(ingredients)
    .map(igKey=><li key={igKey} style={{textAlign:'left'}}><span style={{textTransform:'capitalize'}}>{igKey}:</span>{props.ingredients[igKey]}</li>)

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delisious burger with the following ingredients:</p>
            <ul>
{ingredientsSummury}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}

export default orderSummury