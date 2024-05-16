import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

import styles from "../styles/JumpScrollLayout.module.css";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const JumpScrollLayout = ({children, id}) => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 300);

  return (
    <>
        <section className={styles.section}>
          {/* <div ref={ref}> */}
            <main>
              {children}
            </main>
          {/* </div> */}
          Hello there
          {/* <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2> */}
        </section>
    </>
  )
}

export default JumpScrollLayout