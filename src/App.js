import React from 'react';
import './App.css';
import Layout from "./components/UI/Layout/Layout";
import BurguerBuilder from "./conteiners/BurgerBuilder/BurgerBuilder"
import Checkout from "./conteiners/BurgerBuilder/Checkout/Checkout"
import {Route, Switch} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Layout>
            <Switch>  
              <Route path="/checkout" component = {Checkout} />
              <Route path = "/" exact component = {BurguerBuilder}/>
            </Switch>
           
      </Layout>
    </div>
  );
}

export default App;
