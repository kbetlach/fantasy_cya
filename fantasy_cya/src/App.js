import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Start from "../src/components/pages/Start";

function App() {
  return (
    <Router>
        <div>
        <Route exact path="/" component={Start} />
        </div>
    </Router>
  );
}

export default App;