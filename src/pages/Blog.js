import { useState, useEffect } from 'react'


function Blog({updateText}) {
    var flavorText = {
        title: "BLOG POSTS",
        subtitle: "WHAT IM UP TO",
    }

    useEffect(() => {
      updateText(flavorText);
      console.log('set');
    }, []);

  return (
    <div className="inner">
      <center>
        <h2>Blog posts coming soon!</h2>
        </center>
    </div>
  )

}

export default Blog
