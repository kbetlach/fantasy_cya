import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Character from '../pages/Character';

function Start() {
  return (
      <Router>
    <div className="container">
      <div className="jumbotron">
        <h1>Fantasy Choose Your Own Adventure!</h1>
          <p>Click Begin to start your adventure.</p>
          <Route path="/character" component={Character}>
          Begin Button goes here
          </Route>
      </div>
    </div>
    </Router>
  );
}

export default Start;