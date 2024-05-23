import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutme}>
        {/* <p className={styles.element1}>{`<Nathan>`}</p>
        <h1 className={`${styles.orange} ${styles.by_nathan}`}>by Nathan</h1> */}
        <h2>
          
        </h2>
        <h2>
          {" "}
          Based in Vancouver BC, I&apos;m passionate about software development, the intersection of creativity, technology and forward-thinking
        </h2>
        <h2>Irure excepteur aliqua eiusmod nulla pariatur cupidatat magna eu occaecat esse nostrud. Occaecat sunt esse sunt ullamco laborum occaecat minim do sint culpa. Exercitation adipisicing sint minim irure occaecat reprehenderit irure amet voluptate labore anim aliquip.</h2>
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
