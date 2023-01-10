import Flogo from '../images/whitelogo.png';
import { Link } from 'react-router-dom'
const Header = ({setTitle}) => {
  return (
    <div className="header">
        <div id="header-l">
            <img href="/" src={Flogo} width={25} height={40} alt="F"/>
        </div>
        <div id="header-r">          
          <div className="linkbox"><Link to="/">HOME</Link></div>
          <div className="linkbox"><Link to="/about">ABOUT</Link></div>
          <div className="linkbox"><Link to="/projects">PROJECTS</Link></div>
          <div className="linkbox"><Link to="/blog">BLOG</Link></div>
            
            
        </div>
    </div>
  )
}

export default Header