import React, { useState, useEffect } from "react";
import { CountDownTimer } from "../utils/Constants";
import styles from "./Css/CountdownTimer.module.css";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const timerInterval = setInterval(() => {
      const { distance, days, hours, minutes, seconds } =
        CountDownTimer(1654453800000);
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
      if (distance <= 0) {
        console.log("Finished");
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className={styles.base}>
      <div className={styles.timeBoxRow}>
        <div className={styles.timeBox}>
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <p className={styles.timeLabel}>Days</p>
      </div>

      <div className={styles.timeBoxRow}>
        <div className={styles.timeBox}>
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <p className={styles.timeLabel}>Hours</p>
      </div>

      <div className={styles.timeBoxRow}>
        <div className={styles.timeBox}>
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <p className={styles.timeLabel}>Minutes</p>
      </div>

      <div className={styles.timeBoxRow}>
        <div className={styles.timeBox}>
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <p className={styles.timeLabel}>Seconds</p>
      </div>
    </div>
  );
}
