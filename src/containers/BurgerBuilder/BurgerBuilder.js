import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad:0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.5
}
class BurgerBuilder extends Component {
    state = {
        ingredients:
        {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 2
        },
        totalPrice:4
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]= updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })

    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted =this.state.ingredients[type] !==0 ? oldCount - 1 : 0;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]= updatedCounted;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })

    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemove = {this.removeIngredientHandler}
                stateIngredients={this.state.ingredients}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder