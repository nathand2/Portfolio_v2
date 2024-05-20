import Timer from '../components/Timer'
import Head from 'next/head'

import Auroral from '../components/Auroral';

import auroralStyles from "../styles/auroral.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>20 20 20 Rule</title>
      </Head>
      <Auroral/>
      <Timer />
    </div>
  );
};

export default Home;
