import React from "react";
import { useRef, useState } from "react";
import "./gallery.css";

const Gallery = () => {
  const [movePercentage, setMovePercentage] = useState(0);
  const mouseDownAt = useRef(0);
  const prevPercentage = useRef(0);

  const mousePosition = (e) => {
    mouseDownAt.current = e.clientX;
  };

  const movement = (e) => {
    if (mouseDownAt.current === 0) return;
    const mouseDelta = parseFloat(mouseDownAt.current) - e.clientX,
      maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta)*0.87*-100;
    let nextPercentage = parseFloat(prevPercentage.current) + percentage;
    nextPercentage = Math.min(Math.max(nextPercentage, -100), 0);
    setMovePercentage(nextPercentage);
  };

  const mouseUp = (e) => {
    mouseDownAt.current = 0;
    prevPercentage.current = movePercentage;
  };

  return (
    <div
      className="project-gallery"
      onMouseDown={mousePosition}
      onMouseMove={movement}
      onMouseUp={mouseUp}
      onMouseLeave={mouseUp}
    >
      <div
        id="image-track"
        style={{ transform: `translate(${movePercentage}%, -50%)`, transitionDuration : "1.2s"}}
      >
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="/assets/thL-removebg-preview.png"
          draggable={false} alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="https://images.pexels.com/photos/9042882/pexels-photo-9042882.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards"}}
          src="https://images.pexels.com/photos/6493409/pexels-photo-6493409.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="https://images.pexels.com/photos/14504866/pexels-photo-14504866.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="https://images.pexels.com/photos/10805492/pexels-photo-10805492.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards"}}
          src="https://images.pexels.com/photos/14281756/pexels-photo-14281756.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="https://images.pexels.com/photos/14495755/pexels-photo-14495755.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="https://images.pexels.com/photos/14402634/pexels-photo-14402634.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards"}}
          src="/assets/thR-removebg-preview.png"
          draggable={false}  alt="item"
        ></img>
      </div>
      <div className="text">Click and drag</div>
    </div>
  );
};

export default Gallery;
