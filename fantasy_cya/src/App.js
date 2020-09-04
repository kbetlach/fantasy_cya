import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Start from "../src/components/pages/Start";
import Character from "../src/components/pages/Character";
import RogueStart from "../src/components/pages/Rogue/RogueStart";
import WarriorStart from "../src/components/pages/Warrior/WarriorStart";
import WizardStart from "../src/components/pages/Wizard/WizardStart";

function App() {
  return (
    <Router>
        <div>
        <Route exact path="/" component={Start} />
        <Route exact path="/character" component={Character} />
        <Route exact path="/rogueStart" component={RogueStart} />
        <Route exact path="/warriorStart" component={WarriorStart} />
        <Route exact path="/wizardStart" component={WizardStart} />
        </div>
    </Router>
  );
}

export default App;