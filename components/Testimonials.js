import Image from 'next/image'
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <h1>Testimonials</h1>
      <div className={styles.chappie_container}>
            <div className={styles.chappie_img_container}>
              <Image src="/chappie.jpg" alt="dog, chappie" className={styles.chap} fill />
            </div>
            <h6 className={styles.text_small}>
              &quot;Good developer, better belly rubber. 8/10&quot; - Chappie 2022
            </h6>
          </div>
    </div>
  )
}

export default Testimonials