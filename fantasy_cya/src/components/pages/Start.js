import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";
import '../../App.css';

function Start() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">Fantasy Choose Your Own Adventure!</h1>
          <h2 className="text-center">Click Begin to start your adventure.</h2>
          
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