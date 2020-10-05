import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Start from "../src/components/pages/Start";
import Character from "../src/components/pages/Character";
import RogueStart from "../src/components/pages/Rogue/RogueStart";
import WarriorStart from "../src/components/pages/Warrior/WarriorStart";
import WizardStart from "../src/components/pages/Wizard/WizardStart";
import RogueBranchOne from "../src/components/pages/Rogue/Branches/RogueBranchOne";
import RogueOne from "../src/components/pages/Rogue/Seeds/RogueOne";

function App() {
  return (
    <Router>
        <div>
        <Route exact path="/" component={Start} />
        <Route exact path="/character" component={Character} />
        <Route exact path="/rogueStart" component={RogueStart} />
        <Route exact path="/warriorStart" component={WarriorStart} />
        <Route exact path="/wizardStart" component={WizardStart} />
        <Route exact path="/rogueBranchOne" component={RogueBranchOne} />
        <Route exact path="/rogueOne" component={RogueOne} />
        </div>
    </Router>
  );
}

export default App;