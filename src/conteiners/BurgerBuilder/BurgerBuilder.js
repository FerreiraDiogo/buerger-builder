import React ,{Component,Fragment}from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorHandler from "../../hocs/errorHandler/ErrorHandler";


const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.3,
    bacon:0.7,
    meat:1.3
}
const postHeaders ={
 headers:{
    "Access-Control-Allow-Origin": "*",

 }       
}
class BurgerBuilder extends Component  {

    state = {
        // ingredients:{
        //     salad:0,
        //     bacon:0,
        //     cheese:0,
        //     meat:0,

        // },
        ingredients:null,
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        loading:false,
        error:false
    }

    componentDidMount(){
        axios.get("https://buerger-builder.firebaseio.com/ingredients.json")
             .then(res =>{
                 this.setState({ingredients:res.data})
             })
             .catch((err) =>{
                 this.setState({error:true})
             })
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
        //o firebase exige o .json no endpoint
        // this.setState({loading:true});
        // const order ={
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:"Diogo Ferreira",
        //         adress:{
        //             street:"Rua do Limoeiro",
        //             zipCode:"12345-678",
        //             country:"Brasil"
        //         },
        //         email:"diogo@reactlearn.com"
        //     },
        //     deliveryMethod:"fastest"
        // }
        // axios.post("/orders.json",order,postHeaders)
        //         .then(res =>{this.setState({loading:false, purchasing:false})})
        //         .catch(err =>{console.log(err);this.setState({loading:false,purchasing:false})})
        this.props.history.push("/checkout")
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let i in disabledInfo){
            disabledInfo[i] = disabledInfo[i] <= 0
        }
        let orderSummary = null;

       

        let burger = this.state.error ?<p>Error occured. reload the page</p> : <Spinner/>

        if(this.state.ingredients !== null){
            burger = (
                <Fragment>
                    <Burger ingredients = {this.state.ingredients}/>
                    <BuildControls ingredientsAdded = {this.addIngredientHandler} 
                               ingredientsRemoved = {this.removeIngredientHandler}
                               disabled = {disabledInfo}
                               price = {this.state.totalPrice}
                               purchasable = {this.state.purchasable}
                               purchasing = {this.purchaseHandler}/>
                </Fragment>
            )
            orderSummary = <OrderSummary ingredients = {this.state.ingredients}
            total = {this.state.totalPrice} 
            clicked={this.backdropHandler}
            continue={this.purchaseContinueHandler}></OrderSummary>
            if(this.state.loading){
                orderSummary = <Spinner/>
            }
        }

        return (
            <Fragment>
                
                <Modal show = {this.state.purchasing}
                       clicked = {this.backdropHandler}>
                         {orderSummary}  
                    
                </Modal>
                {burger}
            </Fragment>
        );
    };

};


export default ErrorHandler(BurgerBuilder,axios);