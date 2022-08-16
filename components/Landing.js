import Image from 'next/image'
import styles from '../styles/Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.container}>
      {/* <Image src="/content-bg.jpg" className='graphic' alt="vancouver, night" layout='fill'/> */}
      <img src="/content-bg.jpg" alt="vancouver" className={styles.graphic}/>
      <div className={styles.overlay}>
        <div className={styles.content_container}>
          <h1 className={`${styles.left}`}>Hey</h1>
          <h1>I'm {" "}<span className={styles.accent_green}>N</span>athan <span className={styles.accent_blue}>D</span>ong</h1>
          <h6>Actual Human and Software Developer</h6>
          <div className={styles.chappie_container}>
            <img src='/chappie.jpg' alt='dog, chappie' className={styles.chap} />
            <h6>"Good developer, better belly rubber. 8/10"</h6>
            <h6>- Chappie 2022</h6>
          </div>
          <br />
          <h6 className={styles.text_small}>Click to tell Nathan to <span className={styles.accent_green}>Give Me A Treat</span></h6>
        </div>
      </div>
    </div>
  )
}

export default Landing