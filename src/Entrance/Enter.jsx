import React, { useState } from "react";
import './Enter.css';
import App from '../App';

const Enter = () => {
  const [showApp, setShowApp] = useState(false);

  return showApp ? <App goHome={() => setShowApp(false)} /> : (
    <div className="enter-container">      
      <div className="Entry">
        <h2 className="title">Ai Financial Management Recommendation</h2>
        <button className="Start-button" onClick={() => setShowApp(true)}>Begin</button>
      </div>
    </div>
  );
};

export default Enter;
