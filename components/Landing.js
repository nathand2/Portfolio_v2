import Image from 'next/image'
import styles from '../styles/Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.container} style={{ background: "purple"}}>
      {/* <Image src="/content-bg.jpg" className='graphic' alt="vancouver, night" layout='fill'/> */}
      <img src="/content-bg.jpg" alt="vancouver" className={styles.graphic}/>
    </div>
  )
}

export default Landing