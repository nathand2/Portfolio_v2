import styles from "../styles/AboutMeEducation.module.css";
import Link from "next/link";

const AboutMeEducation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutme_container}>
        <Link href="/about" passHref>
          <a>
            <h1 className={`${styles.text_large} ${styles.title_about}`}>About Me</h1>
            <p className={`${styles.text_small} ${styles.text_about}`}>
              Learn more about who I am as a person and as a developer.
            </p>
          </a>
        </Link>
      </div>
      <div className={styles.education_container}>
        <Link href="/education" passHref>
          <a>
            <h1 className={`${styles.text_large} ${styles.title_education}`}>Education</h1>
            <p className={`${styles.text_small} ${styles.text_education}`}>
              Learn more about my time at British Columbia Institute of Technology.
            </p>
          </a>
        </Link>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default AboutMeEducation;
