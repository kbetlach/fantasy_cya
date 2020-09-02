import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";

function Start() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Fantasy Choose Your Own Adventure!</h1>
          <p>Click Begin to start your adventure.</p>
            <Link to="/character"
              className={window.location.pathname === "/character"}>
                <Button>
                  Begin
                </Button>
            </Link>
      </div>
    </div>
  );
}

export default Start;