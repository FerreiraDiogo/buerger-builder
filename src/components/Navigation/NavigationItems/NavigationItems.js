import React from 'react';
import styles from './navigationItems.module.css';
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems = (props) =>{
    return(
        <ul className = {styles.NavigationItems}>
            <NavigationItem exact link = "/">Burger Builder</NavigationItem>
            <NavigationItem link = "/orders">My orders</NavigationItem>

        </ul>
    );
};


export default navigationItems;

