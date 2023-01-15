import React from 'react'

const Navbar = () => {
  return (
      <nav>
        <div className="hamburger">
          <hr/>
          <hr />
          <hr />
        </div>
        <div className="menu">
          <ul>
            <li><a href='#About'><div className='button-link'>About</div></a></li>
            <li><a href="#Projects"><div className='button-link'>Projects</div></a></li>
            <li><a href="#Skills"><div className='button-link'>Skills</div></a></li>
            <li><a href='#Resume'><div className='button-link'>Resume</div></a></li>
            <li><a href='#Contact'><div className='button-link'>Contact</div></a></li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
