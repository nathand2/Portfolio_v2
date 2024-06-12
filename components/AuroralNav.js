import React from 'react'

import navStyles from '../styles/AuroralNav.module.css'

import Link from "next/link";
import { FaGithub, FaLinkedin, FaHome, FaCircle } from "react-icons/fa";
import { HiOutlineMail, HiEye } from "react-icons/hi";
import { GoFileDirectory } from "react-icons/go";
import { MdInvertColorsOff } from "react-icons/md";

const AuroralNav = ({setShowAuroral, setCurrStyle, auroralStyleArr}) => {

  const showAndSetCurrStyle = (newCurrStyle) => {
    console.log("Hey")
    setShowAuroral(true);
    setCurrStyle(newCurrStyle);
  }

  const hideAuroral = () => {
    setShowAuroral(false);
    setCurrStyle(undefined);
  }

  return (
    <>
      <nav className={navStyles.nav}>
        <div>
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="dg-26" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" style={{stopColor: "#FF3F3F", stopOpacity: 1}} />
                  <stop offset="70%" style={{stopColor: "#063CFF", stopOpacity: 1}} />
                </linearGradient>
              </defs>
            </svg>
          <ul className={navStyles["links-list"]}>
            <li>
              <a className={navStyles.header_link}>
                <MdInvertColorsOff className={navStyles.icon}
                  onClick={hideAuroral}
                />
                <div className={`${navStyles.icon} ${navStyles["auroral-northern-dimmed"]}`}>
                </div>
              </a>
            </li>
            {
              auroralStyleArr.map((auroralStyle, index) => {
                return (
                  <li key={index}>
                    <a className={navStyles.header_link}>
                      {/* <FaCircle className={navStyles.icon} fill="url(#dg-26)" onClick={() => showAndSetCurrStyle("dg-26")}/> */}
                      <div className={`${navStyles.icon} ${navStyles[auroralStyle]}`} onClick={() => showAndSetCurrStyle(auroralStyle)}></div>
                    </a>
                  </li>
                )
              })
            }
            {/* <li>
              <a className={navStyles.header_link}>
                <FaCircle className={navStyles.icon} fill="url(#dg-26)" onClick={() => showAndSetCurrStyle("dg-26")}/>
              </a>
            </li>
            <li>
              {
                <Link href="/projects" className={navStyles.header_link}>
                  <FaCircle className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>Projects</h1>
                </Link>
              }
            </li>
            <li>
              {
                <Link href="/eyes" className={navStyles.header_link}>
                  <FaCircle className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>20-20-20</h1>
                </Link>
              }
            </li> */}
          </ul>
        </div>
        <span></span>
        <div>
          
        </div>
        <div>
        </div>
      </nav>
    </>
  )
}

export default AuroralNav