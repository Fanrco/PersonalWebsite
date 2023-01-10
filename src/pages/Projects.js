import { useState, useEffect} from 'react'
import {projList, projCaps, projLinks} from '../images/images'

function ProjectFormat({pic, cap, link}){
  return (
      <div className = "captionedProject">
          <a href = {link}>
        <h3 style={{marginBottom: "20px"}}>{cap[0]}</h3>
        <div className ="projImg">
          <img href = {link} src = {pic} alt={cap} width="200px"></img>
        </div>
        <div className ="projCap">         
          <p>{cap[1]}</p>
        </div>      
        </a>
      </div>
  )
}

function ProjectList({title, images, captions, links}) {
  const list = []
  for(let i = 0; i < images.length; i++){
      list.push(<ProjectFormat pic = {images[i]} link={links[i]} cap = {captions[i]} key={i} />)
  }

  return (
      <div className = "picList">
          <h2>{title}</h2>
          <div>{list}</div>
      </div>
  )

}

function Projects({updateText}) {
  var flavorText = {
      title: "PROJECTS",
      subtitle: "STUFF IM WORKING ON",
  }

  useEffect(() => {
    updateText(flavorText);
    console.log('set');
  }, []);

  return (
    
    <div className="inner">
      <center>
        <ProjectList images = {projList} captions = {projCaps} links={projLinks}/>
      </center>
    </div>
  )

}

export default Projects
