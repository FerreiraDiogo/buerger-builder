import React, {Fragment}from 'react';
import styles from './OrderSummary.module.css';
import Button from "../../UI/Button/Button"


const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
                                    .map((igKey) =>{
                                        return <li key = {igKey}> <span style = {{textTransform:'capitalize'}}>
                                                        {igKey}
                                                    </span> :{props.ingredients[igKey]}</li>
                                    })
    return(
        <Fragment>
            <h3>Your Order:</h3>
            <p>A puta burgão mit den following ingredientes:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <span><strong>Total do pedido: ${props.total.toFixed(2)}</strong></span>
            <p>Continue to checkout?</p>
            <Button clicked={props.clicked} btnType = "Danger">Cancel</Button>           
            <Button clicked={props.continue} btnType = "Success">Continue</Button>           
        </Fragment>
        
    );
};


export default orderSummary;