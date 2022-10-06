import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Landing.module.css";
import { HiOutlineChevronDown } from "react-icons/hi";

const Landing = () => {
  return (
    <div className={styles.container}>
      <Image
        src="content-bg.jpg"
        className={styles.graphic}
        alt="vancouver, night"
        layout="fill"
        priority
      />
      <div className={styles.overlay}>
        <div className={styles.content_container}>
          <h1 className={`${styles.left}`}>Hey</h1>
          <h1>
            I&apos;m <span className={styles.accent_green}>Nathan</span>{" "}
            <span className={styles.accent_green}>Dong</span>
          </h1>
          <div className={styles.line} />
          <h6>A good Software Developer trying to become a great one.</h6>
          <br />
        </div>
      </div>
      <Link href="/#projects" passHref>
        <a>
          <HiOutlineChevronDown className={styles.arrow} />
        </a>
      </Link>
    </div>
  );
};

export default Landing;
