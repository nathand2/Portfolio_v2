import React from "react";
import styles from "../../styles/Gouken.module.css";

import Collapsable from "../../components/Collapsable";

const Scheduler = () => {
  return (
    <div className={styles.container}>
      <h1><span style={{fontSize: "24px", justifyContent: "center"}}>Devlog // </span>Scheduler</h1>
      <p>
        Adipisicing et anim labore sit tempor et occaecat eiusmod est magna eu
        enim cupidatat id. Consequat ex dolore eu fugiat deserunt tempor
        deserunt aute excepteur ullamco sunt nostrud Lorem. Adipisicing tempor
        incididunt occaecat adipisicing ex exercitation nulla. Dolore voluptate
        commodo proident enim aute reprehenderit dolore. Nostrud dolore irure
        reprehenderit ex nulla fugiat.
      </p>

      <section id="jwt">
        <Collapsable header="JSON Web Tokens">
          <div className={styles.content_container}>
            <p>
              Mollit adipisicing est ad et duis velit ex adipisicing duis qui
              deserunt fugiat aute. Exercitation commodo sit ex et ipsum aliquip
              dolor ad ex et adipisicing quis id cillum. Sit tempor exercitation
              culpa aliquip est.
            </p>
            {/* <div className={styles.video_container}>
              <video controls>
                <source src="/dynamic_hit_boxes.mov" />
                Your browser does not support the video tag.
              </video>
            </div> */}
          </div>
        </Collapsable>
      </section>
    </div>
  );
};

export default Scheduler;
