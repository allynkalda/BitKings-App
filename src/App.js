import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Faq from './components/Faq';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/faq" component={Faq}/>
        <Route path="/pricing" component={Pricing}/>
        <Faq></Faq>
      </Switch>
    </div>
  );
}

export default App;
