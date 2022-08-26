import { useEffect, useState } from "react";

import styles from "../styles/Timer.module.css";

const Timer = () => {
  
  const longTimeoutSeconds = 60 * 20;
  const shortTimeoutSeconds = 60 * 1;

  const convertSecondsToTimeString = (count) => {
    const seconds = count % 60;
    const minutes = Math.floor(count / 60);
    return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`
  }

  const [timer, setTimer] = useState(convertSecondsToTimeString(longTimeoutSeconds))
  const [btnText, setBtnText] = useState('Start')
  const [isStarted, setIsStarted] = useState(false)
  const [currInterval, setCurrInterval] = useState({})
  

  const longTimeout = async (timeout) => {
    let count = timeout - 1;
    const interval = setInterval(() => {
      const timeString = convertSecondsToTimeString(count--);
      setTimer(timeString)
      if (count === 0) {
        shortTimeout(shortTimeoutSeconds);
        clearInterval(interval)
      }
    }, 1000);
    setCurrInterval(interval)

  }

  const shortTimeout = async (timeout) => {
    var audio = new Audio('../notification1.wav');
    audio.play();
    let count = timeout - 1;
    const interval = setInterval(() => {
      const timeString = convertSecondsToTimeString(count--);
      setTimer(timeString)
      if (count === 0) {
        longTimeout(longTimeoutSeconds);
        clearInterval(interval)
      }
    }, 1000);
    setCurrInterval(interval)

  }

  const startTimer = () => {
    setTimer(convertSecondsToTimeString(longTimeoutSeconds))
    console.log("Start")
    setBtnText('Restart')
    setIsStarted(true)
    longTimeout(longTimeoutSeconds)
  }

  const restartTimer = () => {
    console.log("Tried to restart???")
    console.log('currInterval:', currInterval)
    clearInterval(currInterval);
    startTimer()
  }

  return (
    <div className={styles.container}>
      <div className={styles.timer_container}>
        <div className={styles.note_container}>
          <p>  
            20-20-20 Rule. Every 20 minutes, look at something at least 20 feet away, for 20 seconds.
          </p>
          <br />
          <p>
            Keep your eyes healthy 😉 - Nathan
          </p>
        </div>
        <h1>
          {timer}
        </h1>
        <button className={styles.btn_timer} onClick={isStarted ? restartTimer : startTimer}>{btnText}</button>
        
        <br />
          <p>
            20 minutes of focus. Notification. 1 minute to rest your eyes. Auto-resets.
          </p>
      </div>
    </div>
  )
}

export default Timer