import React from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = props => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price:<strong> {props.price.toFixed(2)} $</strong></p>
            {controls.map(ctrl =>
                <BuildControl key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemove(ctrl.type)}
                    disabledState={props.stateIngredients[ctrl.type]}
                />)
            }
                <button className={classes.OrderButton} onClick={props.showModal} disabled={props.disabledOrderNow===false}>ORDER NOW</button>

        </div>
    )

}
export default buildControls