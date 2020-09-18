import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../../Button/Button";
import '../../../../App.css';

function RogueBranchOne() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">You are standing in the corner of a dark alley of the city... black cloak pulled low over your face.</h1>
          <p className="text-center">From your corner, you see an old man, clearly lost, wandering down the alley. He would be easy pickings for the likes of you. Do you...</p>
          
          <Link to="/rogueOne"
              className={window.location.pathname === "/rogueOne"}>
                <Button>
                  Pickpocket the Old Man
                </Button>
            </Link>
          
            <Link to="/rogueTwo"
              className={window.location.pathname === "/rogueTwo"}>
                <Button>
                  Smile kindly, and guide the Old Man out
                </Button>
            </Link>
            
      </div>
    </div>
  );
}

export default RogueBranchOne;