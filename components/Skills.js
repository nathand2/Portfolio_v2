import styles from '../styles/Skills.module.css'

const Skills = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Programming Languages</h1>
        <br />
        <div className={styles.content_container}>
          <div className={styles.col_1}>
            <h2>1000&apos;s of Lines</h2>
            <ul>
              <li>
                Python 🐍
              </li>
              <li>
                Java
              </li>
              <li>
                Javascript
              </li>
              <li>
                C
              </li>
            </ul>
          </div>
          <div className={styles.col_2}>
            <h2>100&apos;s of Lines</h2>
            <ul>
              <li>
                Typescript
              </li>
              <li>
                C++
              </li>
            </ul>
          </div>
        </div>
        <br />
        <h1>Technologies</h1>
        <br />
        <div className={styles.content_container}>
          <div className={styles.col_1}>
            <h2>Confident</h2>
            <ul>
              <li>
                React.js
              </li>
              <li>
                Express.js
              </li>
              <li>
                Node.js
              </li>
              <li>
                MySQL
              </li>
            </ul>
          </div>
          <div className={styles.col_2}>
            <h2>Familiar</h2>
            <ul>
              <li>
                Angular.ts
              </li>
              <li>
                Flask
              </li>
              <li>
                Django
              </li>
              <li>
                PostgreSQL
              </li>
              <li>Next.js</li>
            </ul>
          </div>
        </div>
        <br />
        <h1>Methodologies</h1>
        <br />
        <h4>Agile, Microarchitectures, Rest API&apos;s, Object Oriented Programming</h4>
      </div>
      <div className={styles.line}></div>
    </>
  )
}

export default Skills