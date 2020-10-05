import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../../Button/Button";
import '../../../../App.css';

function RogueOne() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">Just as you expected...</h1>
          <p className="text-center">The old man stumbles by, and with a deft flick of your arm, you liberate the coin purse that was half concealed under his tunic.</p>
          
          <Link to=""
              className={window.location.pathname === "/rogueOne"}>

            </Link>
          
            <Link to=""
              className={window.location.pathname === "/rogueTwo"}>

            </Link>
            
      </div>
    </div>
  );
}

export default RogueOne;