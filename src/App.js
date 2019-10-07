import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "../src/components/Layout/Layout";
import BurguerBuilder from "./conteiners/BurgerBuilder/BurgerBuilder"

function App() {
  return (
    <div className="App">
      <Layout>
          <BurguerBuilder />
      </Layout>
    </div>
  );
}

export default App;
