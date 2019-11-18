import React,{Fragment} from 'react';
import styles from './sidedrawer.module.css';
import Logo from "../../Logo/Logo";
import NavItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop"

const sidedrawer = (props) =>{
    let attachedStyles = [styles.Sidedrawer, styles.Close]
    if (props.show){
        attachedStyles = [styles.Sidedrawer, styles.Open]

    }
    return(
        <Fragment>
            <Backdrop show = {props.show} clicked = {props.closed}/>
                <div className={attachedStyles.join(" ")}>
                    <span onClick = {props.closed} >X</span>
                    <div className = {styles.Logo}>
                        <Logo></Logo>
                    </div>
                <nav>
                    <NavItems>...</NavItems>
                </nav>
            
                </div>
        </Fragment>
        
    );
};


export default sidedrawer;