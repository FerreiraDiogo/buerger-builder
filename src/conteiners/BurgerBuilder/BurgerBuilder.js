import React ,{Component,Fragment}from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";


const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.3,
    bacon:0.7,
    meat:1.3
}

class BurgerBuilder extends Component  {

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,

        },
        totalPrice:4,
        purchasable:false,
        purchasing:false,
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const priceAdd = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        this.setState({ingredients:updatedIngredients,
                       totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);               


    };

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const priceAdd = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAdd;
        this.setState({ingredients:updatedIngredients,
                       totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);               
    };

    updatePurchaseState = (ing)=>{
        const purchasableIngredients = ing;
        const ingredientsSum = Object.keys(purchasableIngredients)
                                     .map((igKey) =>{
                                         return purchasableIngredients[igKey];
                                     })
                                     .reduce((sum, el) =>{
                                            return sum + el;
                                     },0)
        this.setState({purchasable: ingredientsSum > 0})                             
    };

    purchaseHandler = () =>{
        this.setState({purchasing: true})
    };
    backdropHandler = () =>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler = ()=>{
        alert("Du hast comprado this scheisse")
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let i in disabledInfo){
            disabledInfo[i] = disabledInfo[i] <= 0
        }

        return (
            <Fragment>
                
                <Modal show = {this.state.purchasing}
                       clicked = {this.backdropHandler}>
                    <OrderSummary ingredients = {this.state.ingredients}
                                  total = {this.state.totalPrice} 
                                  clicked={this.backdropHandler}
                                  continue={this.purchaseContinueHandler}></OrderSummary>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls ingredientsAdded = {this.addIngredientHandler} 
                               ingredientsRemoved = {this.removeIngredientHandler}
                               disabled = {disabledInfo}
                               price = {this.state.totalPrice}
                               purchasable = {this.state.purchasable}
                               purchasing = {this.purchaseHandler}/>
            </Fragment>
        );
    };

};


export default BurgerBuilder;