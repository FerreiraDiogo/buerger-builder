import React from 'react';
import styles from './checkoutSummary.module.css';
import Burguer from '../Burger/Burger';
import Button from '../UI/Button/Button';


const checkoutSummary = (props) =>{
    return(
        <div className={styles.CheckoutSummary}>
            <h2>We hope it doesn't taste like shit!</h2>
            <div style={{width:"100%",margin:"auto"}}>
                <Burguer ingredients={props.ingredients}/>
            </div>
            <Button  btnType={"Danger"} clicked>Cancel</Button> 
            <Button btnType={"Success"} clicked>Confirm</Button>
        </div>
    );
};


export default checkoutSummary;