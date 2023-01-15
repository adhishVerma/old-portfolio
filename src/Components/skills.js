import React from 'react'

const Skills = () => {
  return (
    <div id="Skills">
      <div className="container">
        <h3>Skills</h3>
        <div className="wrapper">
          <section className='skills'>
          <div className="frontend">Frontend
          <p><img className='logo' src='/assets/react.png' width={48} alt='react-icon'/>React</p>
          <p><img className='logo' id='nextjs-icon' src='/assets/next-js-icon-seeklogo.com.png' width={48} alt='nextjs-icon'/>Next</p>
          <p><img  className='logo' src='/assets/html-5.png' width={48} alt='html-icon'/>Html</p>
          <p><img  className='logo' src='/assets/css-3.png' width={48} alt='css-icon'/>Css</p>
          <p><img  className='logo' src='/assets/js.png' width={48} alt='js-icon'/>JavaScript</p>
          </div>
          <div className="backend">Backend
          <p><img className='logo' src='/assets/node.png' width={48} alt='node-icon'/>Node</p>
          <p><img className='logo' src='/assets/expressjs-icon.png' width={48} alt='express-icon'/>Express</p>
          <p><img className='logo' src='/assets/firebase.png' width={48} alt='firebase-icon'/>Firebase</p>
          <p><img className='logo' src='/assets/mongo.png' width={24} alt='mongodb-icon'/>MongoDB</p>
          </div>
          <div className="languages">Languages
          <p><img className='logo' src='/assets/python.png' width={48} alt='python-icon'/>Python</p>
          <p><img className='logo' src='/assets/js.png' width={48} alt='js-icon'/>JavaScript</p>
          </div>
          <div className="extras">
            Others
            <p><img className='logo' src='/assets/github1.png' width={48} alt='gh-icon'/>Github</p>
          </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Skills
