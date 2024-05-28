import React from 'react'
import Image from "next/image";
import styles from "../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Get in touch!</p>
      <Image src="arrow.svg" className={styles.arrow} alt="contact me!!! pretty please" width={100} height={100}/>
    </div>
  )
}

export default ContactMe