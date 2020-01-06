import React from 'react';
import './App.css';
import Layout from "./components/UI/Layout/Layout";
import BurguerBuilder from "./conteiners/BurgerBuilder/BurgerBuilder"
import Checkout from "./conteiners/Checkout/Checkout"
import {Route, Switch} from "react-router-dom"
import Orders from './conteiners/Orders/Orders';
function App() {
  return (
    <div className="App">
      <Layout>
            <Switch>  
              <Route path="/orders" exact component = {Orders} />
              <Route path="/checkout" component = {Checkout} />
              <Route path = "/" exact component = {BurguerBuilder}/>
            </Switch>
           
      </Layout>
    </div>
  );
}

export default App;
