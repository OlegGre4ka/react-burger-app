import React, { Component } from 'react';
import './CheckoutSummary';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = props => {
    return(
    <div className="CheckoutSummary">
        <h1>We hope it tastes well!</h1>
        <div style={{ width: '100%', margin: 'auto' }}>
            <Burger ingredients={props.ingredients} />
        </div>
        <Button btnType='Danger'>Cancel</Button>
        <Button btnType='Success'>Continue</Button>

    </div>)
}
// class CheckoutSummary extends Component {

//     render() {
//         return (
//            <h>CheckoutSummary</h>
//         )
//     }
// }
export default CheckoutSummary