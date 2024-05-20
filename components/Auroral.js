import { useEffect, useState } from "react";

import auroralStyles from "../styles/auroral.module.css";
import CircularMask from "./CircularMask";

const Auroral = ({mouseX, mouseY}) => {

  const auroralStyleArr = [
    'auroral-northern-intense',
    'auroral-northern',
    'auroral-northern-dimmed',
    'auroral-northern-dusk',
    'auroral-northern-warm',
    'auroral-agrabah'
  ];

  const themeOffset = 2;
  const themeChangeTime = 5;

  const [currStyle, setCurrStyle] = useState(null)
  
  useEffect(() => {
    // var now = new Date();
    // let currStyleIndex = Math.floor(now.getHours() / 6) + themeOffset;
    // transitionAuroraStyle(currStyleIndex);
    
    // Random theme
    
    // transitionAuroraStyle(Math.floor(Math.random() * 6));
    transitionAuroraStyle(1);
  }, [])


  
  const transitionAuroraStyle = async (newStyleIndex) => {
    console.log(newStyleIndex)
    setCurrStyle(auroralStyleArr[newStyleIndex]);

    setTimeout(() => transitionAuroraStyle((newStyleIndex + 1) % auroralStyleArr.length) , 1000 * themeChangeTime)
    // await setTimeout(transitionAuroraStyle((newStyleIndex + 1) % auroralStyleArr.length), 1000 * 10)
  };

  return (
    <div>
       <div className={`${auroralStyles['container']}`}>
        <div className={`${auroralStyles['auroral-northern']}`} style={{opacity: currStyle == "auroral-northern" ? 1 : 0}}></div>
        <div className={`${auroralStyles['auroral-northern-intense']}`} style={{opacity: currStyle == "auroral-northern-intense" ? 1 : 0}}></div>
        <div className={`${auroralStyles['auroral-northern-dimmed']}`}style={{opacity: currStyle == "auroral-northern-dimmed" ? 1 : 0}}></div>
        <div className={`${auroralStyles['auroral-northern-dusk']}`}style={{opacity: currStyle == "auroral-northern-dusk" ? 1 : 0}}></div>
        <div className={`${auroralStyles['auroral-northern-warm']}`}style={{opacity: currStyle == "auroral-northern-warm" ? 1 : 0}}></div>
        <div className={`${auroralStyles['auroral-agrabah']}`}style={{opacity: currStyle == "auroral-agrabah" ? 1 : 0}}></div>
      </div>
      <div className={`${auroralStyles['star-container']}`}>
        <div className={`${auroralStyles['auroral-stars']}`}></div>
      </div>
      {/* <div
        className="mask"
        style={{
          position:" absolute",
          width: "200vw !important",
          height: "200vh",
          pointerEvents: undefined,
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, transparent, rgba(0, 0, 0, 1) 100px)`,
          mixBlendMode: "multiply",
          overflow: "hidden",
        }}
      /> */}
    </div>
  )
}

export default Auroral