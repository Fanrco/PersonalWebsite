import { useState,  useEffect } from 'react'
import {langList, langCaps, bookList, bookCaps} from '../images/images'
import PicList from '../components/PicList'

function About({updateText}) {

  var flavorText = {
    title: "ABOUT ME",
    subtitle: "WHO IS THIS GUY?",
  }
  
  useEffect(() => {
    updateText(flavorText);
    console.log('set');
  }, []);

  return (
    <div className = "inner">
        <center>
        <div className = "aboutdesc">
          <h1 style={{fontSize: "500%"}}>Hi, I'm Franco.</h1>
          <h2>I'm a programmer from Riverside, CA.</h2>
          <p style={{fontSize: "150%"}}>
            I make web apps, games, and software.
          </p>
        </div>
        <PicList title="Programming Languages I know" 
        images={langList} captions={langCaps} height="120px"/>
        <PicList title="Favorite Books"
         images={bookList} captions={bookCaps} height="200px"/>
        </center>
    </div>
  )

}

export default About
