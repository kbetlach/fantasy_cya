import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../Button/Button";
import '../../../App.css';

function WizardStart() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">You are the Wizard</h1>
          <h2 className="text-center">You are wise, and have a deep knowledge of magic and the arcane.</h2>
            <h3 className="text-center">Hit Points: 6</h3>
          
            <Link to="/character"
              className={window.location.pathname === "/character"}>
                <Button>
                  Begin Your Adventure
                </Button>
            </Link>
            
      </div>
    </div>
  );
}

export default WizardStart;