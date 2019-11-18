import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Faq from 'pages/Faq';
import Pricing from 'pages/Pricing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/faq" component={Faq}/>
        <Route path="/pricing" component={Pricing}/>
        <Pricing></Pricing>
      </Switch>
    </div>
  );
}

export default App;
