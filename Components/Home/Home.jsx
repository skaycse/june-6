import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";

export default function Home() {
  const [time, setTime] = useState();
  useEffect(() => {
    console.log("HEY");
  }, []);

  return (
    <main className={styles.base}>
      <div className={styles.left}>LEFT</div>
      <div className={styles.right}>RIGHT</div>
    </main>
  );
}
