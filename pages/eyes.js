import Timer from '../components/Timer'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import Auroral from '../components/Auroral';

import auroralStyles from "../styles/auroral.module.css";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    console.log(e.clientX, e.clientY);
  };
  return (
    <div onMouseMove={handleMouseMove}>
      <Head>
        <title>20 20 20 Rule</title>
      </Head>
      <Auroral mouseX={mousePosition.x} mouseY={mousePosition.y}/>
      <Timer />
    </div>
  );
};

export default Home;
