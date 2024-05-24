import styles from '../styles/Skills.module.css'

const Skills = () => {
  return (
    <>
      
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.skill_container}>
            <h2>Languages</h2>
            <p>Python 🐍, C#, C++, Swift, Java, C, Javascript, Typescript</p>
          </div>
          <div className={styles.skill_container}>
            <h2>Web/Mobile</h2>
            <p>React.js, Next.js, Express.js, Node.js, Angular.ts</p>
          </div>
          <div className={styles.skill_container}>
            <h2>Database</h2>
              <p>MySQL, PostgreSQL</p>
          </div>
          <div className={styles.skill_container}>
            <h2>Methodologies</h2>
            <p>Agile, Object Oriented Programming, REST Api&apos;s</p>
          </div>
        </div>
        <div className={styles.col}>
          <h1 className={styles.background_text}>NATHAN</h1>
          <h1 className={styles.background_text}>NATHAN</h1>
          <h1 className={styles.background_text}>NATHAN</h1>
          <h1 className={styles.background_text}>NATHAN</h1>
          <h1 className={styles.background_text}>NATHAN</h1>
          <h1 className={styles.background_text}>NATHAN</h1>
        </div>
      </div>
    </>
  )
}

export default Skills