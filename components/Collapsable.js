import React from 'react';
import { useState } from 'react';

import styles from '../styles/Collapsable.module.css';

import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

const Collapsable = ({children, header}) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header_container} onClick={() => setShow((prev) => !prev)}>
        <MdOutlineExpandMore className={styles.expand_icon} style={{
          transform: `rotate(${!show ? "-90deg" : "-0deg"})`,
          transition: `transform 0.1s linear`
        }}/>
        <h1>{header}</h1>
      </div>
      <div className={styles.content_container} style={{maxHeight: `${show ? "2000px" : "0px"}`, transition: `
        max-height 0.3s linear`}}>
        {children}
      </div>
    </div>
  )
}

export default Collapsable