import { useState, useEffect } from "react";
import { motion } from "framer-motion";
function Blog({ updateText }) {
  var flavorText = {
    title: "BLOG POSTS",
    subtitle: "WHAT'S ON MY MIND",
  };

  useEffect(() => {
    updateText(flavorText);
    updateText(flavorText);
    console.log("Blog");
  }, []);

  return (
    <motion.div
      className="inner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <br/><br/><br/><br/>
      <center><h2>Blog Posts coming soon</h2></center>
    </motion.div>
  );
}

export default Blog;
