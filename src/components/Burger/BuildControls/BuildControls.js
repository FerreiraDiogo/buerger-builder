import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl'

const controls = [
    {label:"Salad",type:"salad"},
    {label:"Bacon",type:"bacon"},
    {label:"Cheese",type:"cheese"},
    {label:"Meat",type:"meat"}

];

const buildControls = (props) =>{
    return(
        <div className={styles.BuildControls}>
            <p>Total Price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((el) =>{
               return <BuildControl
                         key = {el.label} 
                         label = {el.label} 
                         added = {() =>{props.ingredientsAdded(el.type)}}
                         removed = {() =>{props.ingredientsRemoved(el.type)}} 
                         disabled = {props.disabled[el.type]}/>
            })}
            <button className = {styles.OrderButton}
                    disabled = {!props.purchasable}
                    onClick = {props.purchasing}>Checkout</button>
        </div>
    );
};


export default buildControls;