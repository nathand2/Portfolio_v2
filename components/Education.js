import React from 'react'
import styles from "../styles/Education.module.css";

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.education}>
        
        <h1>Education</h1>
        <br />
        <h3>British Columbia Institute of Technology</h3>
        <h3>Computer Systems Technology, Diploma</h3>
        <br />
        <h2>Graduated with Distinction, (86% GPA)</h2>
        <br />
        <h2>
          Combination of computer systems theory with hands-on practical
          experience in software development
        </h2>

        <div className={styles.line} />
        <h1>Courses</h1>
        <br />
        <ul className={styles.course_list}>
          <li>Internet Software Architecture</li>
          <li>Web Development</li>
          <li>Web Development 2</li>
          <li>Relational Database Systems</li>
          <li>Introduction to Operating Systems</li>
          <li>Ethics for Computing Professionals</li>
          <li>Introduction to Artificial Intelligence</li>
          <li>Machine Learning</li>
          <li>
            Selected Topics in Artificial Intelligence and Machine Learning
          </li>
          <li>Applied Mathematics</li>
          <li>Discrete Mathematics</li>
          <li>Applied Probability and Statistics</li>
          <li>Algorithm Analysis and Design</li>
          <li>Introduction to Data Communications</li>
          <li>Computer Organization/Architecture</li>
          <li>Mobile Development with Android Technologies</li>
          <li>Programming Methods</li>
          <li>Object Oriented Programming</li>
          <li>Object Oriented Programming 2</li>
          <li>Procedural Programming</li>
          <li>Business Communications</li>
          <li>Business Communications 2</li>
        </ul>
        
      </div>
    </div>
  )
}

export default Education