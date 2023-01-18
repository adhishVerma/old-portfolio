import React, { useState, useEffect } from "react";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const skills = document.getElementById("Skills");
    const handleScroll = () => {
      // console.log(skills.offsetTop-window.scrollY);
      if (skills.offsetTop - window.scrollY < 300) {
        // slide-in-elliptic-left-fwd
        setShowSkills(true);
      }
    };
    document.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="Skills">
      <div className="container">
        <h3>Skills</h3>
        <div className="wrapper">
          {showSkills && (
            <section className="skills">
              <div className="frontend">
                Frontend
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/react.png"
                    width={48}
                    alt="react-icon"
                  />
                  React
                </p>
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    id="nextjs-icon"
                    src="/assets/next-js-icon-seeklogo.com.png"
                    width={48}
                    alt="nextjs-icon"
                  />
                  Next
                </p>
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/html-5.png"
                    width={48}
                    alt="html-icon"
                  />
                  Html
                </p>
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/css-3.png"
                    width={48}
                    alt="css-icon"
                  />
                  Css
                </p>
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/js.png"
                    width={48}
                    alt="js-icon"
                  />
                  JavaScript
                </p>
              </div>
              <div className="backend">
                Backend
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/node.png"
                    width={48}
                    alt="node-icon"
                  />
                  Node
                </p>
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/expressjs-icon.png"
                    width={48}
                    alt="express-icon"
                  />
                  Express
                </p>
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/firebase.png"
                    width={48}
                    alt="firebase-icon"
                  />
                  Firebase
                </p>
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/mongo.png"
                    width={24}
                    alt="mongodb-icon"
                  />
                  MongoDB
                </p>
              </div>
              <div className="languages">
                Languages
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/python.png"
                    width={48}
                    alt="python-icon"
                  />
                  Python
                </p>
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/js.png"
                    width={48}
                    alt="js-icon"
                  />
                  JavaScript
                </p>
              </div>
              <div className="extras">
                Others
                <p className="skill-left">
                  <img
                    className="logo roll-in-blurred-left"
                    src="/assets/github1.png"
                    width={48}
                    alt="gh-icon"
                  />
                  Github
                </p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
