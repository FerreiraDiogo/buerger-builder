import React ,{Fragment}from 'react';
import styles from './Modal.module.css';
import BackDrop from "../Backdrop/Backdrop"


const modal = (props) =>{
    return(
        <Fragment>
            <BackDrop show = {props.show} clicked = {props.clicked}/>
            <div className = {styles.Modal}
             style = {{
                 transform : props.show ? "translateY(0)" : "translateY(-100vh)",
                 opacity : props.show ? "1":"0"
             }}>
            {props.children}
        </div>
        </Fragment>
        
    );
};


export default modal;