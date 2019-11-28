import React, {Fragment,Component}from 'react';
//import styles from './OrderSummary.module.css';
import Button from "../../UI/Button/Button"


class OrderSummary extends Component{
    
   
    
    render(){

        
        const ingredientSummary =
        Object.keys(this.props.ingredients)
                                    .map((igKey) =>{
                                        return <li key = {igKey}> <span style = {{textTransform:'capitalize'}}>
                                                        {igKey}
                                                    </span> :{this.props.ingredients[igKey]}</li>
                                    })
        return(
            <Fragment>
                <h3>Your Order:</h3>
                <p>A puta burgão mit den following ingredientes:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <span><strong>Total do pedido: ${this.props.total.toFixed(2)}</strong></span>
                <p>Continue to checkout?</p>
                <Button clicked={this.props.clicked} btnType = "Danger">Cancel</Button>           
                <Button clicked={this.props.continue} btnType = "Success">Continue</Button>           
            </Fragment>
            
        );
    }                                
    
};


export default OrderSummary;