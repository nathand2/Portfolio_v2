import React from "react";
import styles from "../../styles/Gouken.module.css";

import Collapsable from "../../components/Collapsable";

const Gouken = () => {
  return (
    <div className={styles.container}>
      <h1><span style={{fontSize: "24px", justifyContent: "center"}}>Devlog // </span>Gouken</h1>
      {/* <ul>
        <li>
          <a href="#inputbuffer">Input Buffers & Special Moves</a>
        </li>
        <li>
          <a href="#hitboxes">Dynamic Hitboxes & Hurtboxes</a>
        </li>
        <li>
          <a href="#ecs">
            Entity Component System (ECS), Update Loop & Framerate
          </a>
        </li>
        <li>
          <a href="#statemachines">Characters As State Machines</a>
        </li>
        <li>
          <a href="#networking">Peer-to-Peer Networking</a>
        </li>
      </ul> */}
      <p>
        Adipisicing et anim labore sit tempor et occaecat eiusmod est magna eu
        enim cupidatat id. Consequat ex dolore eu fugiat deserunt tempor
        deserunt aute excepteur ullamco sunt nostrud Lorem. Adipisicing tempor
        incididunt occaecat adipisicing ex exercitation nulla. Dolore voluptate
        commodo proident enim aute reprehenderit dolore. Nostrud dolore irure
        reprehenderit ex nulla fugiat.
      </p>
      <div className={styles.video_container}>
        <video controls>
          <source src="/gouken_sizzle_reel.mov" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section id="hitboxes">
        {/* <h2>Dynamic Hitboxes & Hurtboxes</h2> */}
        <Collapsable header="Dynamic Hitboxes & Hurtboxes">
          <div className={styles.content_container}>
            <p>
              Mollit adipisicing est ad et duis velit ex adipisicing duis qui
              deserunt fugiat aute. Exercitation commodo sit ex et ipsum aliquip
              dolor ad ex et adipisicing quis id cillum. Sit tempor exercitation
              culpa aliquip est.
            </p>
            <div className={styles.video_container}>
              <video controls>
                <source src="/dynamic_hit_boxes.mov" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Collapsable>
      </section>

      <section id="inputbuffer">
        {/* <h2>Input Buffers & Special Moves</h2> */}
        <Collapsable header="Input Buffers & Special Moves">
        <div className={styles.content_container}>
          <p>
            Mollit adipisicing est ad et duis velit ex adipisicing duis qui
            deserunt fugiat aute. Exercitation commodo sit ex et ipsum aliquip
            dolor ad ex et adipisicing quis id cillum. Sit tempor exercitation
            culpa aliquip est.
          </p>
          <div className={styles.video_container}>
            <video controls>
              <source src="/input_buffer.mov" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        </Collapsable>
      </section>

      <section id="ecs">
      <Collapsable header="Entity Component System (ECS), Update Loop & Framerate">
        <div className={styles.content_container}>
          {/* <h2>Entity Component System (ECS), Update Loop & Framerate</h2> */}
          <p>
            Mollit adipisicing est ad et duis velit ex adipisicing duis qui
            deserunt fugiat aute. Exercitation commodo sit ex et ipsum aliquip
            dolor ad ex et adipisicing quis id cillum. Sit tempor exercitation
            culpa aliquip est.
          </p>
        </div>
      </Collapsable>
      </section>

      <section id="statemachines">
      <Collapsable header="Characters As State Machines">
        <div className={styles.content_container}>
          {/* <h2>Characters As State Machines</h2> */}
          <p>
            Mollit adipisicing est ad et duis velit ex adipisicing duis qui
            deserunt fugiat aute. Exercitation commodo sit ex et ipsum aliquip
            dolor ad ex et adipisicing quis id cillum. Sit tempor exercitation
            culpa aliquip est.
          </p>
        </div>
      </Collapsable>
      </section>

      <section id="networking">
      <Collapsable header="Peer-to-Peer Networking">
        <div className={styles.content_container}>
          {/* <h2>Peer-to-Peer Networking</h2> */}
          <p>
            Mollit adipisicing est ad et duis velit ex adipisicing duis qui
            deserunt fugiat aute. Exercitation commodo sit ex et ipsum aliquip
            dolor ad ex et adipisicing quis id cillum. Sit tempor exercitation
            culpa aliquip est.
          </p>
          <div className={styles.video_container}>
            <video controls>
              <source src="/camera_lerp.mov" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Collapsable>
      </section>
    </div>
  );
};

export default Gouken;
