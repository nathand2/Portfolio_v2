import styles from '../styles/AboutMeEducation.module.css'

const AboutMeEducation = () => {
  return (
    <div className={styles.container}>
    <div className={styles.aboutme_container} >
        <h1 className={styles.text_large}>About Me</h1>
        <p className={styles.text_small}>Learn more about who I am as a person and as a developer.</p>
    </div>
      <div className={styles.education_container} >
        <h1 className={styles.text_large}>Education</h1>
        <p className={styles.text_small}>Learn more about my time at British Columbia Institute of Technology.</p>
      </div>
      <div className={styles.line}></div>
    </div>
  )
}

export default AboutMeEducation