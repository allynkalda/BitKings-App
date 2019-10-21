import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Faq from './components/Faq';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <h1>BitKings</h1>
      <Switch>
        <Route path="/faq" component={Faq}/>
        <Route path="/pricing" component={Pricing}/>
      </Switch>
    </div>
  );
}

export default App;
