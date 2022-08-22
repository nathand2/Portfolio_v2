import Image from "next/image";
import styles from "../styles/Landing.module.css";

import landingImg from '../public/content-bg.jpg'
import chappieImg from '../public/chappie.jpg';  // 🐶

const Landing = () => {
  return (
    <div className={styles.container}>
      <Image src={landingImg} className={styles.graphic} alt="vancouver, night" layout='fill' placeholder='blur' />
      <div className={styles.overlay}>
        <div className={styles.content_container}>
          <h1 className={`${styles.left}`}>Hey</h1>
          <h1>
            I&apos;m <span className={styles.accent_blue}>N</span>athan{" "}
            <span className={styles.accent_blue}>D</span>ong
          </h1>
          <div className={styles.line} />
          <h6>Actual Human and Software Developer</h6>
          <div className={styles.chappie_container}>
            <div className={styles.chappie_img_container}>
              <Image src={chappieImg} alt="dog, chappie" className={styles.chap} layout='fill' placeholder='blur' />
            </div>
            <h6 className={styles.text_small}>
              &quot;Good developer, better belly rubber. 8/10&quot; - Chappie 2022
            </h6>
          </div>
          <br />
          {/* <h6 className={styles.text_small}>
            Click to tell Nathan to{" "}
            <span className={styles.accent_blue}>Give Me A Treat</span>
          </h6> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
