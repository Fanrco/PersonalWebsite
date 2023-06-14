import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import {AnimatePresence } from "framer-motion";


function AnimatedRoutes({setTitle}) {
    const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Home updateText={setTitle} />} />
      <Route exact path="/about" element={<About updateText={setTitle} />} />
      <Route
        exact
        path="/projects"
        element={<Projects updateText={setTitle} />}
      />
      <Route exact path="/blog" element={<Blog updateText={setTitle} />} />
    </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
