import React, { useState  } from "react";
import HorizontalMenu from "./horizontalMenu";

const Navbar = ({handleResume}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleHamburger = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <>
      {showSidebar && <HorizontalMenu menuClose={() => {setShowSidebar(false)}} handleResume={handleResume}/>}
      <nav>
        <div className="hamburger" onClick={handleHamburger}>
          <hr />
          <hr />
          <hr />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/#About">
                <div className="button-link">About</div>
              </a>
            </li>
            <li>
              <a href="/#Projects">
                <div className="button-link">Projects</div>
              </a>
            </li>
            <li>
              <a href="/#Skills">
                <div className="button-link">Skills</div>
              </a>
            </li>
            <li>
              <a href="/resume">
                <div className="button-link" onClick={handleResume}>Resume</div>
              </a>
            </li>
            <li>
              <a href="/#Contact">
                <div className="button-link">Contact</div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
