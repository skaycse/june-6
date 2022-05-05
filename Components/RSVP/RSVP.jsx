import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Button from "../general/Button";
import CountdownTimer from "../general/CountdownTimer";
import DecoratedBorder from "../general/DecoratedBorder";

export default function RSVP() {
  const [userName, setUserName] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const user = params.get("user");

      setUserName(user);
    }
  }, [typeof window]);

  return (
    <div className={styles.base}>
      <DecoratedBorder />

      <div className={styles.left}>
        <h2>Hey {userName && userName}</h2>
        <h3>You're Invited to our wedding</h3>
        <h4>Register below to let me know you're attending the event</h4>

        <input />
        <div>
          <Button text={"RSVP Now"} />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.rightTitle}>Begins in...</h1>
        <CountdownTimer />
      </div>
    </div>
  );
}
