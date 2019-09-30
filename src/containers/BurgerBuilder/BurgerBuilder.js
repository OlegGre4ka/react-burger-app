import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummury from '../../components/Burger/OrderSummury/OrderSummury';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import _ from 'lodash';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.5
}
class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        // {
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0,
        //     meat: 0
        // },
        totalPrice: 4,
        purchaseable: false,
        isShowModal: false,
        showSpinner: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(req => {
                this.setState({ ingredients: { ...req.data } });
                // console.log(req.data, this.state.ingredients, 'get-ingredients');
            })
        // axios.get('\orders.json')
        //     .then(req => {
        //         if (req.data !== 0 && req.data !== null) {

        //             // const reqArrData=_.toPairs(req.data);
        //             let reqArrData = Object.keys(req.data);

        //             let itemObj = reqArrData[1];
        //             // if (req.data !== 0 && req.data !== null)
        //             const del = req.data[itemObj];
        //             // console.log(req.data, req.data[itemObj], 'get-req');

        //             axios.delete('\orders.json',del)
        //                 .then(req => console.log(req.data, 'req-ordersjson'))
        //         }
        //     })
    }

    updatePurchaseState = (ingredients) => {
        const values = Object.values(ingredients);
        const disabledOrderNow = values.some(val => val !== 0);
        this.setState({
            purchaseable: disabledOrderNow
        })
    }
    showModalHandler = () => {
        // this.state.purchaseable===true ? this.setState({isShowModal:true}) :  this.setState({isShowModal:false})
        this.setState({ isShowModal: true })
        this.gettingToFirebaseHandler();
    }
    closeModalHandler = () => {
        this.setState({ isShowModal: false })

    }
    gettingToFirebaseHandler = () => {
        this.setState({ showSpinner: true });
        const orders = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice.toFixed(2),
            customer: {
                name: 'Oleg',
                address: {
                    street: 'Teststreet',
                    city: 'Hrodno',
                    country: "Belarus"
                },
                email: 'oleg@test.com'
            },
            deliveryMethod: 'fast-test'
        }
        axios.post('\orders.json', orders)
            .then(res => { this.setState({ showSpinner: false }); console.log(res, 'res') })
            .catch(err => { this.setState({ showSpinner: false }); console.log(err, 'err') })
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
        let orderSummury = (<OrderSummury
            show={this.state.isShowModal}
            closeModal={this.closeModalHandler} price={this.state.totalPrice} ingredients={this.state.ingredients} />);
        if (this.state.showSpinner) {
            orderSummury = <Spinner />
        }
        return (
            <Aux>
                <Modal closeModal={this.closeModalHandler} show={this.state.isShowModal}>
                    {orderSummury}
                </Modal>
                {this.state.ingredients ===null&& <div style={{marginTop:'250px'}}><Spinner /></div>}
                {this.state.ingredients  &&
                    <Aux>
                        <Burger ingredients={this.state.ingredients} />

                        <BuildControls
                            ingredientAdded={this.addIngredientHandler}
                            ingredientRemove={this.removeIngredientHandler}
                            stateIngredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            disabledOrderNow={this.state.purchaseable}
                            showModal={this.showModalHandler}
                        />
                    </Aux>}
            </Aux>
        )
    }
}

// export default BurgerBuilder
export default withErrorHandler(BurgerBuilder, axios)
