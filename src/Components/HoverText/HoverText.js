import React from "react";
import "./style.css";

const HoverText = () => {
  return (
    <div className="container">
      <div className="text">
        <div className="line">
          <p className="word">A</p>
          <p className="word fancy">
            <span className="letter-mern">M</span>
            <span className="letter-mern">E</span>
            <span className="letter-mern">R</span>
            <span className="letter-mern">N</span>
          </p>
          <p className="word"></p>
        </div>
        <div className="line">
          <p className="word">Fullstack</p>
        </div>
        <div className="line">
          <p className="word">developer</p>
        </div>
        <div className="line">
          <p className="word fancy">
            <span className="letter">@</span>
            <span className="letter">H</span>
            <span className="letter">e</span>
            <span className="letter">l</span>
            <span className="letter">i</span>
            <span className="letter">x</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoverText;
