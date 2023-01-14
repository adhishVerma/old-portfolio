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
    const percentage = (mouseDelta / maxDelta)*0.37* -100;
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
      className="project-container"
      onMouseDown={mousePosition}
      onMouseMove={movement}
      onMouseUp={mouseUp}
    >
      <div
        id="image-track"
        style={{ transform: `translate(${movePercentage}%, -50%)`, transitionDuration : "1.2s",}}
      >
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="wallhaven-7p2r6y-compressed.jpg"
          draggable={false} alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="wallhaven-6dowqx-compressed.jpg"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards"}}
          src="wallhaven-85orl2-compressed.jpg"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="wallhaven-vq9ddl-compressed.jpg"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="wallhaven-p9kk7m-compressed.jpg"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="wallhaven-vq9eyl-compressed.jpg"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards"}}
          src="wallhaven-3lz66v-compressed.jpg"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="wallhaven-7p27k3-compressed.jpg"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards" }}
          src="wallhaven-5g7ke5-compressed.jpg"
          draggable={false}  alt="item"
        ></img>
        <img
          className="image"
          style={{ objectPosition: `${movePercentage + 100}% center`, transition : `all 1.2s linear`, animationFillMode : "forwards"}}
          src="wallhaven-yx8lgk-compressed.jpg"
          draggable={false}  alt="item"
        ></img>
      </div>
    </div>
  );
};

export default Gallery;
