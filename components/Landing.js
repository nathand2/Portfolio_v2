// import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Landing.module.css";
import { HiOutlineChevronDown } from "react-icons/hi";

const Landing = () => {
  return (
    <div className={styles.container}>
      {/* <Image
        src="content-bg.jpg"
        className={styles.graphic}
        alt="vancouver, night"
        priority
      /> */}
      <div className={styles.overlay}>
        <div className={styles.content_container}>
          <h1 className={`${styles.left}`}>Hey</h1>
          <h1>
            I&apos;m <span className={styles.accent_green}>Nathan</span>{" "}
            <span className={styles.accent_green}>Dong</span>
          </h1>
          <div className={styles.line} />
          <h6>A <span className={styles.accent_green}>good software developer</span></h6>
          <h6>trying to become <span className={styles.accent_green}>a great one.</span></h6>
          <br />
        </div>
      </div>
      <a href="#projects">
          <HiOutlineChevronDown className={styles.arrow} />
      </a>
    </div>
  );
};

export default Landing;
