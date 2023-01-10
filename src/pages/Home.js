import {faceAnim} from '../images/images'
import { useState, useEffect } from 'react'
import { asciiart } from '../textart/casper.js';


function Home({updateText}) {
    var flavorText = {
        title: "FRANCO MIRANDA",
        subtitle: "CREATIVE DEVELOPER",
    }

    const [frame, setFrame] = useState(0);

    useEffect(() => {
        updateText(flavorText);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
          setFrame((f) => (f + 1)%64);
          
        }, 100);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="inner">
            <div className="centeredDiv">
            <center>
            <img src={faceAnim[frame]} style={{maxWidth: "min(40vh, 75vw)"}} alt="Franco in Courier Bold"/>
            </center>
            </div>
        </div>
    )

}

export default Home
