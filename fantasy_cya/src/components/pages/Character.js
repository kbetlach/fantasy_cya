import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";

function Character() {
  return (
    <div>
        Character Selection

        Who are you?

        <Button>
          Warrior
        </Button>

        <Button>
          Wizard
        </Button>

        <Button>
          Rogue
        </Button>
    </div>
  );
}

export default Character;