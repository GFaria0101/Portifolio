import React, {useRef,useEffect } from "react";
import lottie from 'lottie-web';
export default function ProjectsImg(){

    const container = useRef(null)
    useEffect(() => {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "lottie-files/projects/projects.json"
      })
      return () => animation.destroy();
    }, [])
    return (
      <div className="App">
        <div className="container" ref={container}></div>
      </div>
    );
  
}
