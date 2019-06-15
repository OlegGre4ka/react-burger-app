import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummury from '../../components/Burger/OrderSummury/OrderSummury';

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
        purchaseable: false,
        isShowModal: false
    }

    updatePurchaseState = (ingredients) => {
        const values = Object.values(ingredients);
        const disabledOrderNow = values.some((val) => val !== 0);
        this.setState({
            purchaseable: disabledOrderNow
        })
    }
    showModalHandler = () => {
        // this.state.purchaseable===true ? this.setState({isShowModal:true}) :  this.setState({isShowModal:false})
        this.setState({ isShowModal: true })
    }
    closeModalHandler = () => {
        this.setState({ isShowModal: false })

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
                {/* {this.state.isShowModal&&<Modal show={this.state.isShowModal}><OrderSummury ingredients={this.state.ingredients}/></Modal>} */}
                <Modal closeModal={this.closeModalHandler} show={this.state.isShowModal}>
                    <OrderSummury 
                    show={this.state.isShowModal}
                    closeModal={this.closeModalHandler} price={this.state.totalPrice} ingredients={this.state.ingredients} />
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    stateIngredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    disabledOrderNow={this.state.purchaseable}
                    showModal={this.showModalHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder