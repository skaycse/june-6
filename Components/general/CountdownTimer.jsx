import React, { useState, useEffect } from "react";
import { CountDownTimer, VENUE_DATE } from "../utils/Constants";
import styles from "./Css/CountdownTimer.module.css";

export default function CountdownTimer({ time, onFinished = false }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const { distance, days, hours, minutes, seconds } = CountDownTimer(
        new Date(VENUE_DATE) || new Date()
      );
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
      if (distance <= 0) {
        clearInterval(timerInterval);
        if (onFinished) onFinished();
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
