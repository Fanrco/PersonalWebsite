import { useState, useEffect } from "react";
import { projList, projCaps, projLinks } from "../images/images";
import { motion } from "framer-motion";

function ProjectFormat({ pic, cap, link }) {
  return (
    <a href={link}>
      <div className="captionedProject">
        <div className="projImg">
          <img href={link} src={pic} alt={cap} width="200px"></img>
        </div>

        <div className="projCap">
          <h3 style={{ marginBottom: "20px" }}>{cap[0]}</h3>
          <p>{cap[1]}</p>
        </div>
      </div>
    </a>
  );
}

function ProjectList({ title, images, captions, links }) {
  const list = [];
  for (let i = 0; i < images.length; i++) {
    list.push(
      <ProjectFormat
        pic={images[i]}
        link={links[i]}
        cap={captions[i]}
        key={i}
      />
    );
  }

  return (
    <div className="projList">
      <div style={{ display: "table-row", height: "500px" }}>
        <center>
          <div>{list}</div>
        </center>
      </div>
    </div>
  );
}

function Projects({ updateText }) {
  var flavorText = {
    title: "PROJECTS",
    subtitle: "WHAT IM WORKING ON",
  };

  useEffect(() => {
    updateText(flavorText);
    updateText(flavorText);
    console.log("Projects");
  }, []);

  return (
    <motion.div
      className="inner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <br />
      <br />
      <br />
      <center>
        <ProjectList images={projList} captions={projCaps} links={projLinks} />
      </center>
    </motion.div>
  );
}

export default Projects;
