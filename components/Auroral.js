import { useEffect, useState } from "react";

import { MdInvertColors } from "react-icons/md";
import { MdInvertColorsOff } from "react-icons/md";

import auroralStyles from "../styles/auroral.module.css";

import AuroralNav from "./AuroralNav";

const Auroral = ({ mouseX, mouseY }) => {
  const auroralStyleArr = [
    "auroral-northern-dimmed",
    "auroral-northern-dusk",
    "auroral-northern-warm",
    "auroral-agrabah",
    "auroral-northern-intense",
    "auroral-northern",
  ];

  const themeOffset = 2;
  const themeChangeTime = 20;

  const [currStyle, setCurrStyle] = useState(null);
  const [showAuroral, setShowAuroral] = useState(false);
  const [easeBackgroundTransform, setEaseBackgroundTransform] = useState(true);

  useEffect(() => {
    // transitionAuroraStyle(5);
    setTimeout(() => {
      setEaseBackgroundTransform(false);
    }, 1000 * 2);
  }, []);

  const transitionAuroraStyle = async (newStyleIndex) => {
    console.log(newStyleIndex);
    setCurrStyle(auroralStyleArr[newStyleIndex]);

    setTimeout(
      () => transitionAuroraStyle((newStyleIndex + 1) % auroralStyleArr.length),
      1000 * themeChangeTime
    );
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* {showAuroral ? (
          <MdInvertColorsOff
            className={auroralStyles.toggle_btn}
            onClick={() => setShowAuroral(false)}
          />
        ) : (
          <MdInvertColors
            className={auroralStyles.toggle_btn}
            onClick={() => setShowAuroral(true)}
          />
        )} */}
        <div
          style={{
            opacity: showAuroral ? 1 : 0,
            transition: `opacity 0.1s linear`,
          }}
        >
          <div
            className={`${auroralStyles["container"]}`}
            style={{
              transform: `translateX(calc(-75vw + ${
                mouseX * 1
              }px)) translateY(calc(0vh - ${mouseY * 0.4}px))`,
              transition: easeBackgroundTransform ? `transform 0.1s linear` : "none",
              willChange: "transform",
            }}
          >
            {/* <div
              className={`${auroralStyles["auroral-dg-26"]}`}
              style={{ opacity: currStyle == "dg-26" ? 1 : 0}}
            ></div> */}
            
            {/* <div
              className={`${auroralStyles["auroral-dg-31"]}`}
              style={{ opacity: 1}}
            ></div> */}
            <div
              className={`${auroralStyles["auroral-northern"]}`}
              style={{ opacity: currStyle == "auroral-northern" ? 1 : 0 }}
            ></div>
            <div
              className={`${auroralStyles["auroral-northern-intense"]}`}
              style={{
                opacity: currStyle == "auroral-northern-intense" ? 1 : 0,
              }}
            ></div>
            <div
              className={`${auroralStyles["auroral-northern-dimmed"]}`}
              style={{
                opacity: currStyle == "auroral-northern-dimmed" ? 1 : 0,
              }}
            ></div>
            <div
              className={`${auroralStyles["auroral-northern-dusk"]}`}
              style={{ opacity: currStyle == "auroral-northern-dusk" ? 1 : 0 }}
            ></div>
            <div
              className={`${auroralStyles["auroral-northern-warm"]}`}
              style={{ opacity: currStyle == "auroral-northern-warm" ? 1 : 0 }}
            ></div>
            <div
              className={`${auroralStyles["auroral-agrabah"]}`}
              style={{ opacity: currStyle == "auroral-agrabah" ? 1 : 0 }}
            ></div>
          </div>
          <div
            className={`${auroralStyles["star-container"]}`}
            style={{
              // transform: `translateX(${mouseX * 0.01}px) translateY(${mouseY * 0.005}px)`,
              overflow: "hidden",
              // transition: `transform 0.1s linear`
            }}
          >
            <div
              className={`${auroralStyles["auroral-stars"]}`}
              style={{
                transform: `translateX(${mouseX * 0.01}px) translateY(${
                  mouseY * 0.005
                }px)`,
                // overflow: "hidden"
                transition: `transform 0.1s linear`,
              }}
            ></div>
          </div>
        </div>
        {/* <div
          className="mask"
          style={{
            position: " absolute",
            width: "100vw !important",
            height: "100vh",
            pointerEvents: undefined,
            background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, hsl(330, 100%, 45.1%) 0%,
            hsl(331, 89.25%, 47.36%) 8.1%,
            hsl(330.53, 79.69%, 48.96%) 15.5%,
            hsl(328.56, 70.89%, 49.96%) 22.5%,
            hsl(324.94, 63.52%, 50.4%) 29%,
            hsl(319.21, 54.99%, 50.3%) 35.3%,
            hsl(310.39, 46.14%, 49.68%) 41.2%,
            hsl(296.53, 39.12%, 49.7%) 47.1%,
            hsl(280.63, 42.91%, 53.43%) 52.9%,
            hsl(265.14, 47.59%, 56.84%) 58.8%,
            hsl(250.13, 52.52%, 59.88%) 64.7%,
            hsl(235.88, 59.2%, 60.91%) 71%,
            hsl(225.81, 68.23%, 57.85%) 77.5%,
            hsl(218.93, 74.97%, 54.21%) 84.5%,
            hsl(213.89, 79.63%, 49.97%) 91.9%,
            hsl(210, 100%, 45.1%) 100%)
            `,
            mixBlendMode: "multiply",
            overflow: "hidden",
            transition: 'background 0.5s ease-out'
          }}
        /> */}
      </div>
      <AuroralNav setShowAuroral={setShowAuroral} setCurrStyle={setCurrStyle} auroralStyleArr={auroralStyleArr}/>
    </>
  );
};

export default Auroral;
