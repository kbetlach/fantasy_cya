import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";

function Character() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">Character Selection</h1>
        <h2 className="text-center">Who are you?</h2>

        <Link to="/warriorStart" className={window.location.pathname === "/warriorStart"}>
          <Button>
            Warrior
          </Button>
        </Link>

        <Link to="/rogueStart" className={window.location.pathname === "/rogueStart"}>
          <Button>
            Rogue
          </Button>
        </Link>

        <Link to="/wizardStart" className={window.location.pathname === "/wizardStart"}>
          <Button>
            Wizard
          </Button>
        </Link>

        </div>
    </div>
  );
}

export default Character;