import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Start from "../src/components/pages/Start";
import Character from "../src/components/pages/Character";

function App() {
  return (
    <Router>
        <div>
        <Route exact path="/" component={Start} />
        <Route exact path="/character" component={Character} />
        </div>
    </Router>
  );
}

export default App;