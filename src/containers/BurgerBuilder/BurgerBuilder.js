import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.5
}
class BurgerBuilder extends Component {
    state = {
        ingredients:
        {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false
    }

    updatePurchaseState = (ingredients) => {
        const values = Object.values(ingredients);
        const disabledOrderNow = values.some((val) => val !== 0);
        this.setState({
            purchaseable: disabledOrderNow
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.updatePurchaseState(updatedIngredients);
 
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = this.state.ingredients[type] !== 0 ? oldCount - 1 : 0;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCounted;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.updatePurchaseState(updatedIngredients);

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        })
    }
    
    render() {
    
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    stateIngredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    disabledOrderNow={this.state.purchaseable}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder