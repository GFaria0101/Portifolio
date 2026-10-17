import React, {useRef,useEffect } from "react";
import lottie from 'lottie-web';
// import data from "./data.svg"
// for animated svgs use json file
export default function TeamLeadImg(){
    const container = useRef(null)
    useEffect(() => {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie-files/skills/teamLead/team_lead.json'
      })
      return () => animation.destroy();
    }, [])
    return (
      <div className="App">
        <div className="container" ref={container}></div>
      </div>
    );
  
}

// for static svgs
// class DesignImg extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//       <img src={data} alt="" width="450"/>
//       </div>
//       </div>
//     );
//   }
// }

// export default DesignImg;