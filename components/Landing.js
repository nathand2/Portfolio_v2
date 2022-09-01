import Image from "next/image";
import styles from "../styles/Landing.module.css";

import landingImg from '../public/content-bg.jpg'

const Landing = () => {
  return (
    <div className={styles.container}>
      <Image src={landingImg} className={styles.graphic} alt="vancouver, night" layout='fill' priority />
      <div className={styles.overlay}>
        <div className={styles.content_container}>
          <h1 className={`${styles.left}`}>Hey</h1>
          <h1>
            I&apos;m <span className={styles.accent_blue}>N</span>athan{" "}
            <span className={styles.accent_blue}>D</span>ong
          </h1>
          <div className={styles.line} />
          <h6>A good Software Developer trying to become a great one.</h6>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Landing;
