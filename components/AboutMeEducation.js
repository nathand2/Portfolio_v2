import styles from "../styles/AboutMeEducation.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutMeEducation = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.aboutme_container}
      >
        <Link href="/about">
            <h1 className={`${styles.text_large} ${styles.title_about}`}>
              About Me
            </h1>
            <p className={`${styles.text_small} ${styles.text_about}`}>
              Learn more about who I am as a person and as a developer.
            </p>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.education_container}
      >
        <Link href="/education">
            <h1 className={`${styles.text_large} ${styles.title_education}`}>
              Education
            </h1>
            <p className={`${styles.text_small} ${styles.text_education}`}>
              Learn more about my time at British Columbia Institute of
              Technology.
            </p>
        </Link>
      </motion.div>
      <div className={styles.line}></div>
    </div>
  );
};

export default AboutMeEducation;
