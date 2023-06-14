import { useState, useRef, useEffect } from "react";
import { langList, langCaps, bookList, bookCaps } from "../images/images";
import { faceAnim } from "../images/images";
import { motion } from "framer-motion";

function About({ updateText }) {
  var flavorText = {
    title: "ABOUT ME",
    subtitle: "WHO AM I",
  };

  useEffect(() => {
    updateText(flavorText);
    updateText(flavorText);
    console.log("About");
  }, []);

  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const frameInterval = setInterval(() => {
      setFrame((f) => (f + 1) % 64);
    }, 100);

    return () => clearInterval(frameInterval);
  }, []);

  return (
    <motion.div
      className="inner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <br />
      <center>
        <div className="inlineDiv" style={{ width: "min(400px, 90%)" }}>
          <img
            src={faceAnim[frame]}
            style={{ maxWidth: "min(40vh, 75vw)" }}
            alt="Franco in Courier Bold"
          />
        </div>

        <div
          className="inlineDiv"
          style={{ width: "min(600px, 90%)", textAlign: "left" }}
        >
          <h1 style={{ fontSize: "500%" }}>Hi, I'm Franco.</h1>
          <p style={{ fontSize: "150%" }}>
            I'm a Programmer specializing in Full Stack Development, Data
            Engineering, Embedded Systems Engineering, and Game Design.
          </p>

          <p style={{ fontSize: "150%" }}>
            I have a Bachelor's Degree in Computer Science from University of
            California, Riverside.
          </p>

          <p style={{ fontSize: "150%" }}>
            I am proficient in Javascript, HTML5/CSS3, Python, C++/C/C#, and
            GLSL
          </p>
        </div>
      </center>
    </motion.div>
  );
}

export default About;
