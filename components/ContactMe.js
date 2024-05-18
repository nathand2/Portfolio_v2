import React from 'react'
import styles from "../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Get in touch!</p>
      <img src="arrow.svg" className={styles.arrow} alt="contact me!!! pretty please"/>
    </div>
  )
}

export default ContactMe