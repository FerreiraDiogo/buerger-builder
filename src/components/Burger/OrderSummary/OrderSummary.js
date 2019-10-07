import React, {Fragment}from 'react';
import styles from './OrderSummary.module.css';


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
            <p>Continue to checkout?</p>
        </Fragment>
        
    );
};


export default orderSummary;