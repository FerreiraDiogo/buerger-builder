import React from 'react';
import './App.css';
import Layout from "./components/UI/Layout/Layout";
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
