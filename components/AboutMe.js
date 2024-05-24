import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutme}>
        <h2>
          {" "}
          Based in Vancouver BC, I&apos;m passionate about software development, the intersection of creativity, technology and forward-thinking
        </h2>
        <h2>I have a keen interest in video game developemnt in addition to extensive experience with Full-Stack development</h2>
        <div className={styles.circles}>
          <svg width="160" height="50">
            <circle cx="30" cy="25" r="20" fill="#7B7B7B" />
            <circle cx="80" cy="25" r="20" fill="#DAD4D3" />
            <circle cx="130" cy="25" r="20" fill="#D45427" />
          </svg>
        </div>
        <br />
      </div>
    </div>
  );
};

export default AboutMe;
