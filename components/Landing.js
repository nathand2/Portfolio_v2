// import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Landing.module.css";
import auroralStyles from "../styles/auroral.module.css";

import { HiOutlineChevronDown } from "react-icons/hi";

const Landing = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.overlay}`}>
          <div className={styles.content_container}>
            <h1 className={`${styles.left}`}>Hey I&apos;m <span className={styles.accent_green}>Nathan</span></h1>
            <div className={styles.line} />
            {/* <h6>A <span className={styles.accent_green}>good software developer</span></h6>
            <h6>trying to become <span className={styles.accent_green}>a great one.</span></h6> */}
            <h5>A good software developer</h5>
            <h5>trying to become a great one.</h5>
            <br />
          </div>
        </div>
        <a href="#projects">
            <HiOutlineChevronDown className={styles.arrow} />
        </a>
      </div>
    </>
  );
};

export default Landing;
