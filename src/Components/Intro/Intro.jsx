import "./Intro.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef()
  useEffect(()=> {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Architect', 'Fullstack Developer', 'UI/UX Designer'] })
  },[])

  return <div className="intro" id="intro">
<div className="left">
  <div className="imageContainer">
    <img src="assets/Reza-Asadi.jpeg" alt="" />
  </div>
</div>
<div className="right">
  <div className="wrapper">
  <h2>Hi there, this is </h2>
  <h1>Reza Asadi</h1>
  <h3>Creative <span ref={textRef}></span></h3>
  </div>
  <a href="#portfolio">
    <img src="assets/down.png" alt="" />
  </a>
</div>
  </div>;
}
