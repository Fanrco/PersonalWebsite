import Header from "./components/Header"
import TypeWriter from "./components/TypeWriter"
import { useState, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"
import './App.css';

function App() {
  
  const [title, setTitle] = useState(
    {
      title: "",
      subtitle: "",
    }
  );

  return (
    
    <div className="App">
      <Router>
        <Header setTitle = {setTitle} />
        <TypeWriter target = {title} />
        
        <div id="mainBody">
          <div id="leftBar"></div>
            <div id="showCase">
              <Routes>
                <Route exact path='/' element={<Home updateText={setTitle}/>} />
                <Route exact path='/about' element={<About updateText={setTitle} />} />
                <Route exact path='/projects' element={<Projects updateText={setTitle}/>} />
                <Route exact path='/blog' element={<Blog updateText={setTitle}/>} />
              </Routes>
            </div>
          <div id="rightBar"></div>
          
        </div>
        </Router>
    </div>
    
  );
}

export default App;
