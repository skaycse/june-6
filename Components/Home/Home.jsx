import Image from "next/image";
import styles from "../../styles/Home.module.css";
import CountdownTimer from "../general/CountdownTimer";
import {
  BRIDE_NAME,
  GROOM_NAME,
  IMAGE_PATH,
  VENUE_DATE
} from "../utils/Constants";

export default function Home() {
  return (
    <main className={styles.base}>
      <div className={styles.decoratedBorder1} style={{ top: 0, left: 0 }}>
        <Image
          src={IMAGE_PATH + "decorated-border.svg"}
          layout={"fill"}
          priority
        />
      </div>
      <div
        className={styles.decoratedBorder2}
        style={{ top: 0, right: 0, transform: "rotate(90deg)" }}
      >
        <Image
          src={IMAGE_PATH + "decorated-border.svg"}
          layout={"fill"}
          priority
        />
      </div>
      <div
        className={styles.decoratedBorder3}
        style={{ bottom: 0, left: 0, transform: "rotate(-90deg)" }}
      >
        <Image
          src={IMAGE_PATH + "decorated-border.svg"}
          layout={"fill"}
          priority
        />
      </div>
      <div
        className={styles.decoratedBorder4}
        style={{ bottom: 0, right: 0, transform: "rotate(180deg)" }}
      >
        <Image
          src={IMAGE_PATH + "decorated-border.svg"}
          layout={"fill"}
          priority
        />
      </div>
      <div className={styles.left}>
        <h1 className={styles.venue}>{new Date(VENUE_DATE).toDateString()}</h1>
        <div className={styles.groomBrideBase}>
          <h1 className={styles.groomTitle}>{GROOM_NAME}</h1>
          <div className={styles.heartImageBase}>
            <Image src={IMAGE_PATH + "heart.svg"} layout={"fill"} priority />
            <span className={styles.ambersand}>&</span>
          </div>
          <h1 className={styles.groomTitle}>{BRIDE_NAME}</h1>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.rightTitle}>Begins in...</h1>
        <CountdownTimer />
      </div>
    </main>
  );
}
