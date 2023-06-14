import { useState, useEffect } from "react";
import React from "react";
import blacklogo from "../images/blacklogo.png";
import { motion } from "framer-motion";
import { Terrain } from "../components/Terrain"

function Home({ updateText }) {
  var flavorText = {
    title: "FRANCO MIRANDA",
    subtitle: "CREATIVE DEVELOPER",
  };

  useEffect(() => {
    updateText(flavorText);
    updateText(flavorText);
    console.log("Home");
  }, []);

  return (
    <motion.div
      className="inner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <center>
        <div id="p5CanvasParent">
          <Terrain />
        </div>
      </center>
    </motion.div>
  );
}

export default Home;
