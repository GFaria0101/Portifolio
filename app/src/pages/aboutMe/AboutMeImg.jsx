import React, {useRef,useEffect } from "react";
import lottie from 'lottie-web';
export default function AboutMeImg(){

    const container = useRef(null)
    useEffect(() => {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie-files/aboutMe/about2.json'
      })
      return () => animation.destroy();
    }, [])
    return (
        <div className="container" ref={container}></div>
    );
  
}
