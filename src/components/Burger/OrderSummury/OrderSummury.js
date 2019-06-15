import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

// class OrderSummury extends React.Component {
//Here should be functional component, not claas-based component
    // componentDidUpdate(){
    //     console.log('OrderSummury-DidUpdate');
    // }

    // render() {
        // const ingredients = { ...this.props.ingredients };
        // const ingredientsSummury = Object.keys(ingredients)
            // .map(igKey => <li key={igKey} style={{ textAlign: 'left' }}><span style={{ textTransform: 'capitalize' }}>{igKey}:</span>{this.props.ingredients[igKey]}</li>)
        const OrderSummury = props =>{
      const ingredients = { ...props.ingredients };
        const ingredientsSummury = Object.keys(ingredients)
            .map(igKey => <li key={igKey} style={{ textAlign: 'left' }}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}:</span>{props.ingredients[igKey]}</li>)

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delisious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummury}
                </ul>
                <p><strong>Total Price:</strong> {props.price.toFixed(2)} $</p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={props.closeModal}>CANCEL</Button>
                <Button btnType="Success" clicked={props.closeModal}>CONTINUE</Button>

            </Aux>
        )
    }
// }

export default OrderSummury