import React from 'react';
import styles from './logo.module.css';
import Logo from "../../assets/img/burger-logo.png"

const logo = (props) =>{
    return(
        <div className = {styles.Logo} style = {{height:props.height}}> 
            <img src = {Logo} alt="logo" />
        </div>
    );
};


export default logo;