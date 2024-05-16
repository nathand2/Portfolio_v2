import styles from '../styles/Skills.module.css'

const Skills = () => {
  return (
    <>
      
      <div className={styles.container}>
          <div className={styles.twocolumns}>
            <h2>Languages</h2>
            Python 🐍, C#, C++, Swift, Java, C, Javascript, Typescript
          </div>
          <div className={styles.col_2}>
            <h2>Web/Mobile</h2>
            React.js, Next.js, Express.js, Node.js, Angular.ts,
          </div>
          <div className={styles.col_1}>
            <h2>Database</h2>
              MySQL, PostgreSQL
          </div>
          <div className={styles.twocolumns}>
            <h2>Methodologies</h2>
            Agile, Object Oriented Programming, REST Api&apos;s
          </div>
      </div>
    </>
  )
}

export default Skills