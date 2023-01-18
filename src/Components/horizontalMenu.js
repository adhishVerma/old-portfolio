import React from "react";

const HorizontalMenu = ({menuClose, handleResume}) => {
  console.log(menuClose)
  return (
    <div id="h-menu">
      <div id="h-menu-items">
        <a href="/#About" class="h-menu-item" onClick={menuClose}>
          About
        </a>
        <a href="/#Projects" class="h-menu-item" onClick={menuClose}>
          Projects
        </a>
        <a href="/#Skills" class="h-menu-item" onClick={menuClose}>
          Skills
        </a>
        <a href="/resume" class="h-menu-item" onClick={() => {handleResume();
        menuClose();}}>
          Resume
        </a>
        <a href="/#Contact" class="h-menu-item" onClick={menuClose}>
          Contact
        </a>
        <div id="h-menu-background"></div>
      </div>
    </div>
  );
};

export default HorizontalMenu;
