import React, {Component} from 'react';
import styles from './checkout.module.css';
import CheckoutSummary from '../../components/CheckoutSummary/checkoutSummary';
import { Route } from 'react-router-dom';
import ContactData from "./Contact-data/ContactData"

class Checkout extends Component {
    state={
        ingredients:null,
        totalPrice:0
    };

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let q of query.entries()){
            if(q[0] === "price"){
                price = q[1]
            }else{
                ingredients[q[0]] = +q[1];

            }
        }
        console.log(ingredients,query,this.props.location.search)
        this.setState({ingredients:ingredients, totalPrice:price})
    }

    checkoutCanceledHandler = () =>{this.props.history.goBack();}
    checkoutConfirmedHandler = () =>{this.props.history.replace("/checkout/contact-data");}
    render(){
      
        return(
                <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                 checkoutCanceled={this.checkoutCanceledHandler}
                                 checkoutConfirmed={this.checkoutConfirmedHandler}
                ></CheckoutSummary>
                <Route path={this.props.match.path +"/contact-data"} render= {(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)} />
                    
                </div>
            );
    }
}

export default Checkout;