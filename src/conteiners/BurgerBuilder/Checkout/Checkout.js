import React, {Component} from 'react';
import styles from './checkout.module.css';
import CheckoutSummary from '../../../components/CheckoutSummary/checkoutSummary';

class Checkout extends Component {
    state={
        ingredients:{
            salad:1,
            cheese:1,
            meat:1,
            bacon:1
        }
    };
    render(){
        return(
                <div>
                <CheckoutSummary ingredients={this.state.ingredients}></CheckoutSummary>
                    
                </div>
            );
    }
}

export default Checkout;