import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutme}>
        <h1>Thanks for taking the time to visit my web portfolio.</h1>
        <br />
        <h2>
          {" "}
          I&apos;m an aspiring Software Developer that loves technology and is
          eager to gain experience and make things that have an impact of the
          real world! I really want a chance to prove myself despite my
          inexperience, please consider contacting me so that I may better
          express my capabilities as a software developer
        </h2>
        <br />

        <h1>Development Skills</h1>
        <br />
        <h2>
          Programming Languages: Python, JavaScript, Java, C
          <br />
          Technologies: React.js, Node.js, Express.js, REST APIs, SQL, HTML,
          CSS, SASS
          <br />
          Tools: VSCode, PyCharm, VCS, Git, GitHub, Figma
        </h2>
        
        <div className={styles.line} />

        {/* <h1>Why should I hire you?</h1>
        <br />
        <h2>
          I&apos;m an aspiring Software Developer who loves technology and is
          eager to gain experience and make things that have an impact of the
          real world! Give me a chance and I&apos;ll prove that I have what it takes to become a great Software Developer and addition to your team.
        </h2> */}
        <br />
        <h1>How was your time at BCIT?</h1>
        <br />
        <h2>
          Looking back at my time at BCIT, I&apos;ve found myself characterizing the experience as a love/hate relationship. During the program, we we&apos;re treated not as students but as workers. Numerous deadlines all converging upon eachother had me ripping my hair out, but had developed in me the qualities of tenacity and grit needed to become a Software Developer that can always get the job done. Looking back, I&apos;m glad to have done the program and I believe I am a better Software Developer having completed it.
        </h2>
        <br />
        <h1>What have you been doing since graduation?</h1>
        <br />
        <h2>
          Since graduating, I&apos;ve been actively looking for a job as a Software Developer and have been doing projects to learn new skills and technologies.
        </h2>
        <br />
        <h1>What are some random things about you?</h1>
        <br />
        <h2>
          I love technology and I love gaming! Titles I love are Valorant,
          Modern Warefare, Rainbow 6 Siege, Sea of Thieves, Minecraft and more.
          I&apos;ve been playing video games all my life and I don&apos;t plan
          to stop anytime soon.
        </h2>
        <br />
        <h2>
          I love movies, TV shows and books. My favorite movie has to be Avatar,
          my favorite TV show is Attack on Titan and my favorite (nostalgic)
          book is Hatchet by Gary Paulsen (King Killer Chronicles is also
          great).
        </h2>
        <div className={styles.line} />

      </div>
    </div>
  );
};

export default AboutMe;
