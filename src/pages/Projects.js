import { useState, useEffect } from "react";
import { projectObjs } from "../images/images";
import { motion } from "framer-motion";

function ProjectFormat({projectInfo}) {
  return (
    <a href={projectInfo.link}>
      <div className="captionedProject">
        <div className="projImg">
          <img href={projectInfo.link} src={projectInfo.image} alt={projectInfo.title} width="200px"></img>
        </div>

        <div className="projCap">
          <h3 style={{ marginBottom: "20px" }}>{projectInfo.title}</h3>
          <p>{projectInfo.description}</p>
        </div>
      </div>
    </a>
  );
}

function ProjectList({ projectObjs }) {
  const list = [];
  for (let i = 0; i < projectObjs.length; i++) {
    list.push(
      <ProjectFormat
        projectInfo={projectObjs[i]}
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
        <ProjectList projectObjs={projectObjs} />
      </center>
    </motion.div>
  );
}

export default Projects;
