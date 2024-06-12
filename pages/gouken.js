import React from "react";
import styles from "../styles/Gouken.module.css";

import Image from "next/image";
import Collapsable from "../components/Collapsable";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Devlog // Gouken</h1>
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
        A Street Fighter style fighting game developed for iOS using Swift.

        SceneKit is an Apple provided API that handled some heavy lifting for animation, physics simulations and physics based rendering, but as a team, we were still responsible for designing the underlying game architecture.
        Key Fighting Game features we set out to implement:
      </p>
        <ul>
          <li>
            Attacking/Blocking/Movement
          </li>
          <li>
            Arcade Mode (CPU)
          </li>
          <li>
            PvP
          </li>
          <li>
            Combos/Attack Chaining
          </li>
          <li>
            Special Inputs/Moves
          </li>
        </ul>
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
              Hitboxes and Hurtboxes were implemented to determine when attacks hit and miss. We considered 2 appoaches for hitboxes:
              <br/>
              1. Manually creating hitboxes relative to a characters&apos; root position (picture spawning floating hitboxes in front of the character)
              <br/>
              2. Mounting boxes on the character model
              <br/>
              <br/>
              Since authoring with the first approach would have been a very manual process when authoring moves (nightmare), we decided to go with the second approach because even though attacks would soley be based on the animation. The authoring process for moves would only entail dynamically activating and deactivating certain hitboxes/hurtboxes attached to the character at certain points during the animation.
            </p>
            <div className={styles.image_container}>
              <Image
                src={`/gouken_hitboxes.png`}
                className={styles.preview}
                alt={"Gouken Hitboxes Image"}
                fill
              />
            </div>
            <p>Classically in fighting games, attacks are comprised of 3 phases:</p>
            <ol>
              <li>Startup Frames - number of frames from the input of the move to the point it becomes active</li>
              <li>Active Frames - number of frames during which the move can hit the opponent</li>
              <li>Recovery Frames - number of frames during which a character cannot perform any actions and is vulnerable</li>
            </ol>
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

export default Home;
