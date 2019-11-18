import React,{Fragment,Component} from 'react'
import styles from "./Layout.module.css";
import Toolbar from "../../../components/Navigation/Toolbar/Toolbar"
import Sidedrawer from "..//../Navigation/Sidedrawer/Sidedrawer";


class Layout extends Component {
    
   state = {
       showSideDrawer :false,
   }

   sideDrawerClosedHandler = ()=>{
       this.setState((prevState)=>{
         return {showSideDrawer:!prevState.showSideDrawer}
       })
   }

   render(){
    return(
        <Fragment>
            {/* <div>
                toolbar,sidebar,navigation
            </div> */}
            <Sidedrawer closed = {this.sideDrawerClosedHandler} show = {this.state.showSideDrawer}/>
            <Toolbar show = {this.sideDrawerClosedHandler}/>
            <main className = {styles.Content}>
                {this.props.children}
            </main>
        </Fragment>
        
    );
   }
};


export default  Layout;
