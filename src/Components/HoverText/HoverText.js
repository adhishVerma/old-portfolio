import React from 'react'
import './style.css'

const HoverText = () => {
  return (
    <div className='container'>
      <div className='text'>
        <div className="line">
          <p className='word'>A</p>
          <p className='word'>MERN</p>
          <p className='word'></p>
        </div>
        <div className="line">
          <p className='word'>Fullstack</p>
        </div>
        <div className="line">
          <p className="word">developer</p>
        </div>
        <div className='line'><p className='word fancy'>
            <span className='letter'>@</span>
            <span className='letter'>G</span>
            <span className='letter'>i</span>
            <span className='letter'>t</span>
            <span className='letter'>h</span>
            <span className='letter'>u</span>
            <span className='letter'>b</span>
          </p></div>
        <div className='line'><p className='word fancy'>
            <span className='letter'>@</span>
            <span className='letter'>H</span>
            <span className='letter'>e</span>
            <span className='letter'>l</span>
            <span className='letter'>i</span>
            <span className='letter'>x</span>
          </p></div>
      </div>
    </div>
  )
}

export default HoverText
