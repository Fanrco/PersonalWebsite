import Header from "./components/Header";

import { useState, Suspense } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  const [title, setTitle] = useState({
    title: "",
    subtitle: "",
  });

  return (
    <div className="App">
      <HashRouter>
        <Header setTitle={setTitle} title={title} />
            
              <AnimatedRoutes  setTitle={setTitle}/>
          
      </HashRouter>
    </div>
  );
}

export default App;
