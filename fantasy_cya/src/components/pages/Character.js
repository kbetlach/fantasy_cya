import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";

function Character() {
  return (
    <div>
        Character Selection

        Who are you?

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
  );
}

export default Character;