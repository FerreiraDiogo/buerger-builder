import React from 'react';
import styles from './order.module.css';


const order = (props) =>{
    let ingredients = [];
    for(let i in props.ingredients){
        ingredients.push({
            name:i,
            amount:props.ingredients[i]
        })
    }

    const ingredientsOutput = ingredients.map(ig =>{
        return (
            <span style={{textAlign:"center",
                     textTransform:"capitalize",
                     display:"inline-block",
                    margin:"0 8px",
                    padding:"8px",
                    border:"1px solid black",
                    borderRadius:"3px",
                    boxShadow:" 0 2px 3px grey"}} 
                key = {ig.name+ig.amount}>
                 {ig.name} ({ig.amount})
            </span>
        )
    })
    return(
        <div className={styles.Order}>
<p>Ingredients:{ingredientsOutput}</p>
            <p>Price:<strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>

    );
};


export default order;